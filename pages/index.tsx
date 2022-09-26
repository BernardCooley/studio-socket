import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import React from "react";
import { AuthContext } from "../contexts/authContext";

const Home: NextPage = () => {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div className={styles.container}>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
