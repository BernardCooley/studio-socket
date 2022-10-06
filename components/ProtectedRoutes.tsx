import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

const ProtectedRoute = ({
    children,
    user,
}: {
    children: ReactNode;
    user: any;
}) => {
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
