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
