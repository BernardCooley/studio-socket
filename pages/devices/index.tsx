import { InferGetServerSidePropsType } from "next";
import React from "react";
import { getFirebaseDevices } from "../../firebase/functions";

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const Devices = ({ devices }: Props) => {
    return (
        <div className="devices" data-testid="devices-page">
            {devices?.map((device) => (
                <div key={device.id}>{device.id}</div>
            ))}
        </div>
    );
};

export const getServerSideProps = async () => {
    const devices = await getFirebaseDevices(20);

    return {
        props: {
            devices,
        },
    };
};

export default Devices;
