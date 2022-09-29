import React, { useState, useRef, FormEvent, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { LoginFormSchema } from "../../formValidation";
import { getErrorMessages } from "../../utils";

interface Props {}

const Login = ({}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState([]);
    const [formErrorMessages, setFormErrorMessage] = useState<string[]>([]);
    const [showFormError, setShowFormError] = useState<boolean>(false);
    const router = useRouter();
    const { login } = useAuth();

    useEffect(() => {
        if (formErrorMessages.length > 0) {
            setShowFormError(true);
        } else {
            setShowFormError(false);
        }
    }, [formErrorMessages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        validate();

        if (errors.length === 0) {
            try {
                await login(
                    emailRef.current?.value,
                    passwordRef.current?.value
                );
                router.push("/devices");
            } catch (err: any) {
                console.log(err.code);
                if (err.code === "auth/user-not-found") {
                    setFormErrorMessage([
                        ...formErrorMessages,
                        "Email/password incorrect",
                    ]);
                }
            }
        }
    };

    const validate = () => {
        try {
            LoginFormSchema.parse({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            });
        } catch (err: any) {
            setErrors(err.errors);
        }
    };

    const onFormClick = () => {
        setShowFormError(false);
        setFormErrorMessage([]);
    };

    return (
        <div className="authContainer">
            <form
                onSubmit={handleSubmit}
                className="authForm"
                noValidate={true}
                onClick={onFormClick}
            >
                <h1 className="text-2xl">Log in</h1>

                <div
                    className={`w-full relative transition duration-200 flex flex-col items-center`}
                >
                    {showFormError && (
                        <div className="absolute z-10 text-xl top-1/2 border-red-500 text-red-500 w-80 text-center bg-white p-2 rounded-lg border-2 drop-shadow-md">
                            {formErrorMessages.map((message) => (
                                <div key={message}>{message}</div>
                            ))}
                        </div>
                    )}
                    <CustomTextInput
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        className={`customTextInput ${
                            showFormError
                                ? "pointer-events-none opacity-50"
                                : ""
                        }`}
                        defaultValue={"bernardcooley@gmail.com"}
                        inputClassName="bg-transparent"
                        ref={emailRef}
                        errorMessages={getErrorMessages(errors, "email")}
                    />
                    <CustomTextInput
                        className={`customTextInput ${
                            showFormError
                                ? "pointer-events-none opacity-50"
                                : ""
                        }`}
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        defaultValue={"Yeloocc1"}
                        inputClassName="bg-transparent"
                        ref={passwordRef}
                        errorMessages={getErrorMessages(errors, "password")}
                    />
                    <CustomButton
                        label="Log in"
                        type="submit"
                        className={`authButton ${
                            showFormError
                                ? "pointer-events-none opacity-50"
                                : ""
                        }`}
                    />
                </div>
                <div className="mt-4 w-full text-right flex justify-end">
                    <span>Dont have an account?</span>
                    <CustomButton
                        label="Register"
                        type="button"
                        className="authHaveAnAccount"
                        labelClassName="hover:underline underline-offset-4"
                        onClick={() => router.push("/register")}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
