import React, { useState, useEffect } from "react";
import styles from "./styles.Register.module.scss";

interface Props {}

const Register = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return <div className={styles.container}>Register</div>;
};

Register.propTypes = {};

export default Register;
