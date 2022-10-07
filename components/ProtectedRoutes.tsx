import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (
            !user.uid &&
            router.pathname !== "/login" &&
            router.pathname !== "/register"
        ) {
            router.push("/login");
        }
    }, [router, user]);

    return <>{user ? children : null}</>;
};

export default ProtectedRoute;
