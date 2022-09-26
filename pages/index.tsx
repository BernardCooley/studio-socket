import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import allDevices from "../data/all-devices.json";
import { useEffect, useState } from "react";
import { getDeviceWithInterface, IDevice } from "../types";
import React from "react";

const Home: NextPage = () => {
    const [devices, setDevices] = useState<IDevice[]>([]);

    useEffect(() => {
        setDevices(allDevices as IDevice[]);
    }, []);

    return <div className={styles.container}>Home</div>;
};

export default Home;
