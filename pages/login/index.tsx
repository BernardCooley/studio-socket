import React, { useState, useRef, FormEvent, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { LoginFormSchema } from "../../formValidation";
import { getErrorMessages } from "../../utils";
import FormMessage from "../../components/FormMessage";
import AuthHero from "../../components/AuthHero/AuthHero";

interface Props {}

const Login = ({}: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState([]);
    const [formMessages, setFormMessages] = useState<string[]>([]);
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false);
    const router = useRouter();
    const { login } = useAuth();
    const loggingInMessage = "Logging in...";

    useEffect(() => {
        if (formMessages.length > 0) {
            setShowFormMessages(true);
        } else {
            setShowFormMessages(false);
        }
    }, [formMessages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        validate();

        if (errors.length === 0) {
            setFormMessages([loggingInMessage]);
            try {
                await login(
                    emailRef.current?.value,
                    passwordRef.current?.value
                );
                router.push("/devices");
            } catch (err: any) {
                if (err.code === "auth/user-not-found") {
                    setFormMessages([
                        ...formMessages,
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
        setShowFormMessages(false);
        setFormMessages([]);
    };

    return (
        <div className="authBakcground">
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
                        className={`w-full relative transition duration-200 flex flex-col items-center`}
                    >
                        <FormMessage
                            formMessages={formMessages}
                            messageToMatch={loggingInMessage}
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
                            defaultValue={"bernardcooley@gmail.com"}
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
                            defaultValue={"Yeloocc1"}
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
        </div>
    );
};

export default Login;
