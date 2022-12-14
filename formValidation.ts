import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email().min(10),
    password: z.string().min(8),
});

export const RegisterFormSchema = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(8, { message: "Password must be 8 or more characters long" }),
        repeatPassword: z
            .string()
            .min(8, { message: "Password must be 8 or more characters long" }),
    })
    .superRefine(({ repeatPassword, password }, ctx) => {
        if (repeatPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["repeatPassword"],
            });
        }
    });

export const generateFormMessages = (
    errorCode: any,
    formMessages: string[]
) => {
    const messages = [];

    if (
        errorCode === "auth/user-not-found" ||
        errorCode === "auth/wrong-password"
    ) {
        messages.push("Email/password incorrect.");
    }

    if (errorCode === "auth/too-many-requests") {
        messages.push("Too many attempts. Please try again later.");
    }

    if (
        errorCode === "auth/email-already-exists" ||
        errorCode === "auth/email-already-in-use"
    ) {
        messages.push("User already exists.");
    }

    if (errorCode === "auth/internal-error") {
        messages.push("An error has occurred. Please try again later");
    }

    return [...formMessages, ...messages];
};
