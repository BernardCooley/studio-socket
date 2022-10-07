import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { generateFormMessages, RegisterFormSchema } from "../../formValidation";
import { getErrorMessages } from "../../utils";
import FormMessage from "../../components/FormMessage";
import AuthHero from "../../components/AuthHero/AuthHero";
import LineBackground from "../../components/LineBackground/LineBackground";

interface Props {}

const Register = ({}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const repeatPasswordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState([]);
    const router = useRouter();
    const { register } = useAuth();
    const [formMessages, setFormMessages] = useState<string[]>([]);
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] =
        useState<boolean>(false);

    const isProduction = process.env.NODE_ENV === "production";

    useEffect(() => {
        if (formMessages.length > 0) {
            setShowFormMessages(true);
        } else {
            setShowFormMessages(false);
        }
    }, [formMessages]);

    const clearMessages = () => {
        setFormMessages([]);
        setShowFormMessages(false);
        setErrors([]);
        setSubmitButtonDisabled(false);
    };

    const handleSubmit = async (e: FormEvent) => {
        clearMessages();
        e.preventDefault();

        if (validate() && errors.length === 0) {
            setSubmitButtonDisabled(true);

            if (
                emailRef.current &&
                passwordRef.current &&
                repeatPasswordRef.current
            ) {
                try {
                    await register(
                        emailRef.current.value,
                        passwordRef.current.value
                    );
                    clearMessages();
                    router.push("/devices");
                } catch (err: any) {
                    setFormMessages(
                        generateFormMessages(err.code, formMessages)
                    );
                }
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
            return true;
        } catch (err: any) {
            setErrors(err.errors);
            return false;
        }
    };

    const onFormClick = () => {
        setShowFormMessages(false);
        setFormMessages([]);
        setSubmitButtonDisabled(false);
    };

    return (
        <div className="authBakcground">
            <LineBackground />
            <div className="authContainer">
                <AuthHero />
                <form
                    onSubmit={handleSubmit}
                    className="authForm"
                    noValidate={true}
                    onClick={onFormClick}
                >
                    <h1 className="text-2xl">Create account</h1>
                    <div className="w-full relative flex flex-col items-center">
                        <FormMessage
                            formMessages={formMessages}
                            showFormMessages={showFormMessages}
                        />
                        <CustomTextInput
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            className="customTextInput"
                            inputClassName="bg-transparent"
                            ref={emailRef}
                            defaultValue={
                                !isProduction ? "bernardcooley@gmail.com" : ""
                            }
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
                            defaultValue={!isProduction ? "Yeloocc1" : ""}
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
                            defaultValue={!isProduction ? "Yeloocc1" : ""}
                            errorMessages={getErrorMessages(
                                errors,
                                "repeatPassword"
                            )}
                        />
                        <CustomButton
                            label="Register"
                            type="submit"
                            className="authButton"
                            disabled={submitButtonDisabled}
                        />
                    </div>
                    <div className="mt-4 w-full text-right flex justify-end">
                        <span>Already registered?</span>
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
        </div>
    );
};

export default Register;
