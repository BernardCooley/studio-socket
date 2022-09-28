import React, { useState, MouseEvent, ChangeEvent } from "react";
import styles from "./styles.Login.module.scss";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";
import router from "next/router";
import Link from "next/link";
import { authFormStyles, authFormFieldStyles } from "../../materialStyles";

interface FormState {
    password: string;
    email: string;
    showPassword: boolean;
    showRepeatPassword: boolean;
}

interface Props {}

const Login = ({}: Props) => {
    const { login } = useAuth();

    const [values, setValues] = useState<FormState>({
        password: "",
        email: "",
        showPassword: false,
        showRepeatPassword: false,
    });

    const handleChange =
        (prop: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        try {
            await login(values.email, values.password);
            router.push("/devices");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Box sx={authFormStyles}>
                    <h1 className={styles.title}>Log in</h1>
                    <FormControl variant="standard" sx={authFormFieldStyles}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            aria-describedby="email-helper-text"
                            inputProps={{
                                "aria-label": "email",
                            }}
                        />
                    </FormControl>
                    <FormControl sx={authFormFieldStyles} variant="standard">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div className={styles.buttonContainer}>
                        <Button type="submit" variant="outlined">
                            Login
                        </Button>
                        <div className={styles.changeAuth}>
                            <div className={styles.alreadyText}>
                                Not registered?...
                            </div>
                            <Link href="/register">Register</Link>
                        </div>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default Login;
