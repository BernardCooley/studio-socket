import React, { useState, useEffect } from "react";
import styles from "./styles.Auth.module.scss";

interface Props {}

const Auth = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return <div className={styles.container}>Auth</div>;
};

Auth.propTypes = {};

export default Auth;
