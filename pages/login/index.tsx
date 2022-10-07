import React, { useState, useRef, FormEvent, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { generateFormMessages, LoginFormSchema } from "../../formValidation";
import { getErrorMessages } from "../../utils";
import FormMessage from "../../components/FormMessage";
import AuthHero from "../../components/AuthHero/AuthHero";
import LineBackground from "../../components/LineBackground/LineBackground";

interface Props {}

const Login = ({}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState([]);
    const [formMessages, setFormMessages] = useState<string[]>([]);
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false);
    const router = useRouter();
    const { login } = useAuth();
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

            if (emailRef.current && passwordRef.current) {
                try {
                    await login(
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
            LoginFormSchema.parse({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
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
        <div className="authBakcground" data-testid="login-page">
            <LineBackground />
            <div className="authContainer">
                <AuthHero />
                <form
                    onSubmit={handleSubmit}
                    className="authForm"
                    noValidate={true}
                    onClick={onFormClick}
                >
                    <h1 className="text-2xl">Log in</h1>

                    <div
                        className={`w-full relative flex flex-col items-center`}
                    >
                        <FormMessage
                            formMessages={formMessages}
                            showFormMessages={showFormMessages}
                        />
                        <CustomTextInput
                            id="email"
                            type="email"
                            label="Email"
                            name="email"
                            className={`customTextInput ${
                                showFormMessages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }`}
                            defaultValue={
                                !isProduction ? "bernardcooley@gmail.com" : ""
                            }
                            inputClassName="bg-transparent"
                            ref={emailRef}
                            errorMessages={getErrorMessages(errors, "email")}
                        />
                        <CustomTextInput
                            className={`customTextInput ${
                                showFormMessages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }`}
                            type="password"
                            id="password"
                            label="Password"
                            name="password"
                            defaultValue={!isProduction ? "Yeloocc1" : ""}
                            inputClassName="bg-transparent"
                            ref={passwordRef}
                            errorMessages={getErrorMessages(errors, "password")}
                        />
                        <CustomButton
                            label="Log in"
                            type="submit"
                            className={`authButton ${
                                showFormMessages
                                    ? "pointer-events-none opacity-50"
                                    : ""
                            }`}
                            disabled={submitButtonDisabled}
                        />
                    </div>
                    <div className="mt-4 w-full text-right flex justify-end">
                        <span>Not registered?</span>
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
        </div>
    );
};

export default Login;
