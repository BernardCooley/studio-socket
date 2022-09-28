import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./styles.Devices.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import router from "next/router";

interface Props {}

const Devices = ({}: Props) => {
    const { logout } = useAuth();
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    const signOut = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className={styles.container}>
            <Button onClick={signOut}>Log out</Button>
        </div>
    );
};

export default Devices;
