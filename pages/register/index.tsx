import React, { FormEvent, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { RegisterFormSchema } from "../../formValidation";
import { getErrorMessages } from "../../utils";

interface Props {}

const Register = ({}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const repeatPasswordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState([]);
    const router = useRouter();
    const { register } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        validate();

        if (errors.length === 0) {
            try {
                await register(
                    emailRef.current?.value,
                    passwordRef.current?.value
                );
                router.push("/devices");
            } catch (err: any) {
                console.log(err.code);
            }
        }
    };

    const validate = () => {
        try {
            RegisterFormSchema.parse({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                repeatPassword: repeatPasswordRef.current?.value,
            });
        } catch (err: any) {
            setErrors(err.errors);
        }
    };

    return (
        <div className="authContainer">
            <form
                onSubmit={handleSubmit}
                className="authForm"
                noValidate={true}
            >
                <h1 className="text-2xl">Create account</h1>
                <div className="w-full">
                    <CustomTextInput
                        id="email"
                        type="email"
                        label="Email"
                        name="email"
                        className="customTextInput"
                        inputClassName="bg-transparent"
                        ref={emailRef}
                        defaultValue="bernardcooley@gmail.com"
                        errorMessages={getErrorMessages(errors, "email")}
                    />
                    <CustomTextInput
                        className="customTextInput"
                        type="password"
                        id="password"
                        label="Password"
                        name="password"
                        inputClassName="bg-transparent"
                        ref={passwordRef}
                        defaultValue="Yeloocc1"
                        errorMessages={getErrorMessages(errors, "password")}
                    />
                    <CustomTextInput
                        className="customTextInput"
                        type="password"
                        id="repeatPassword"
                        label="Repeat password"
                        name="repeatPassword"
                        inputClassName="bg-transparent"
                        ref={repeatPasswordRef}
                        defaultValue="Yeloocc1"
                        errorMessages={getErrorMessages(
                            errors,
                            "repeatPassword"
                        )}
                    />
                    <CustomButton
                        label="Register"
                        type="submit"
                        className="authButton"
                    />
                </div>
                <div className="mt-4 w-full text-right flex justify-end">
                    <span>Already have an account?</span>
                    <CustomButton
                        label="Log in"
                        type="button"
                        className="authHaveAnAccount"
                        labelClassName="hover:underline underline-offset-4"
                        onClick={() => router.push("/login")}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;
