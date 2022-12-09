import React, { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { getFirebaseImage } from "../firebase/functions";
import ImageWithFallback from "../components/ImageWithFallback";
import { IFirebaseImage } from "../types";

const listItems = [
    "Create a collection of your devices",
    "Add them to your studio",
    "Connect them together via midi and audio cables",
    "Create multiple studios",
    "Share your studios with the community",
    "Get feedback about your studio from the community",
];

interface Props {}

const Landing: NextPage<any> = ({}: Props) => {
    const [logo, setLogo] = React.useState<IFirebaseImage | undefined>(
        undefined
    );
    const [tableImage, setTableImage] = React.useState<
        IFirebaseImage | undefined
    >(undefined);

    useEffect(() => {
        getLogo();
        getTableImage();
    }, []);

    const getLogo = async () => {
        const logo = await getFirebaseImage("brand", "logo.png");
        setLogo(logo);
    };

    const getTableImage = async () => {
        const tableImage = await getFirebaseImage("brand", "table.png");
        setTableImage(tableImage);
    };

    return (
        <div className="Home">
            <section className="text-secondary flex flex-col items-center bg-modular bg-cover bg-center bg-no-repeat bg-origin-border">
                <div className="Links p-6 flex justify-between w-full text-2xl font-light">
                    <Link href="./login">Login</Link>
                    <Link href="./register">Sign up</Link>
                </div>
                <div className="Logo w-full flex justify-center">
                    <ImageWithFallback
                        title=""
                        image={logo}
                        fit="contain"
                        layout="responsive"
                        containerClassname="w-64"
                    />
                </div>
                <div className="Title uppercase text-2xl tracking-widest font-light">
                    Music studio designer
                </div>
                <div className="Description mt-3 p-4 text-lg text-center bg-primary/80 shadow-3xl shadow-primary">
                    Plan and map your music studio. Search from our database of
                    Synths, Drum machines, Mixers, etc..., connect them via
                    audio and midi cables to build working plans of your
                    current, or dream studio.
                </div>
            </section>
            <section className="py-3">
                <div className="Table w-full flex justify-center">
                    <ImageWithFallback
                        title=""
                        image={tableImage}
                        fit="contain"
                        layout="responsive"
                        containerClassname="w-full p-3"
                        size={{ width: 250, height: 100 }}
                    />
                </div>
            </section>
            <section className="shadow-3xl shadow-primary/40">
                <ul className="p-4 pl-8 list-disc text-lg">
                    {listItems.map((item) => (
                        <li key={item} className="">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Landing;
