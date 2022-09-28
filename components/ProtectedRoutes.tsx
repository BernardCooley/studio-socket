import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user.uid) {
            router.push("/login");
        }
    }, [router, user]);

    return <>{user ? children : null}</>;
};

export default ProtectedRoute;
