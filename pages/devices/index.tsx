import React, { useState, useEffect } from "react";
import styles from "./styles.Devices.module.scss";

interface Props {}

const Devices = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return <div className={styles.container}>Devices</div>;
};

export default Devices;
