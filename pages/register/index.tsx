import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
} from "@mui/material";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles.Register.module.scss";
import router from "next/router";
import Link from "next/link";
import { authFormStyles, authFormFieldStyles } from "../../materialStyles";

interface FormState {
    password: string;
    repeatPassword: string;
    email: string;
    showPassword: boolean;
    showRepeatPassword: boolean;
}

interface Props {}

const Register = ({}: Props) => {
    const { register } = useAuth();

    const [values, setValues] = useState<FormState>({
        password: "",
        repeatPassword: "",
        email: "",
        showPassword: false,
        showRepeatPassword: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(values.email, values.password);
            router.push("/devices");
        } catch (err) {
            console.log(err);
        }
    };

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

    const handleClickShowRepeatPassword = () => {
        setValues({
            ...values,
            showRepeatPassword: !values.showRepeatPassword,
        });
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Box sx={authFormStyles}>
                    <h1 className={styles.title}>Register</h1>
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
                    <FormControl sx={authFormFieldStyles} variant="standard">
                        <InputLabel htmlFor="repeat-password">
                            Repeat password
                        </InputLabel>
                        <Input
                            id="repeat-password"
                            type={
                                values.showRepeatPassword ? "text" : "password"
                            }
                            value={values.repeatPassword}
                            onChange={handleChange("repeatPassword")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle repeat password visibility"
                                        onClick={handleClickShowRepeatPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showRepeatPassword ? (
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
                            Register
                        </Button>
                        <div className={styles.changeAuth}>
                            <div className={styles.alreadyText}>
                                Already registered?...
                            </div>
                            <Link href="/login">Log in</Link>
                        </div>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default Register;
