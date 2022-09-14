import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import allDevices from "../data/all-devices.json";
import { useEffect, useState } from "react";
import { IDevice } from "../data/types";

const Home: NextPage = () => {
    const [devices, setDevices] = useState<IDevice[]>([]);

    useEffect(() => {
        setDevices(allDevices as IDevice[]);
    }, []);

    return (
        <div className={styles.container}>
            {devices &&
                devices.map((device) => (
                    <div key={device.slug}>{device.title}</div>
                ))}
        </div>
    );
};

export default Home;
