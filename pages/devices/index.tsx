import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import router from "next/router";

interface Props {}

const Devices = ({}: Props) => {
    const { logout } = useAuth();

    const signOut = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className="">
            <Button onClick={signOut}>Log out</Button>
        </div>
    );
};

export default Devices;
