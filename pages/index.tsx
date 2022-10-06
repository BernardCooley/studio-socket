import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Home: NextPage = () => {
    const { user, login } = useAuth();

    return (
        <div className={styles.container}>
            {/* {user ? <div>{user}</div> : <div>No user</div>} */}
        </div>
    );
};

export default Home;
