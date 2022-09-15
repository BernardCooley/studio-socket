import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import allDevices from "../data/all-devices.json";
import { useEffect, useState } from "react";
import { getDeviceWithInterface, IDevice } from "../types";

const Home: NextPage = () => {
    const [devices, setDevices] = useState<IDevice[]>([]);

    useEffect(() => {
        setDevices(allDevices as IDevice[]);
    }, []);

    return (
        <div className={styles.container}>
            {devices &&
                devices.map((device) => {
                    const dev = getDeviceWithInterface(
                        device.deviceTypes,
                        device
                    );
                    return (
                        <div key={dev.slug}>
                            {dev.title}: {JSON.stringify(dev.connections)}
                            <hr></hr>
                        </div>
                    );
                })}
        </div>
    );
};

export default Home;
