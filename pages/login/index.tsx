import React, { useState, useEffect } from "react";
import styles from "./styles.Login.module.scss";

interface Props {}

const Login = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return <div className={styles.container}>Login</div>;
};

Login.propTypes = {};

export default Login;
