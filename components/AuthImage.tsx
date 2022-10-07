import Image from "next/image";
import React from "react";
import { ISketchImage } from "../types";
interface Props {
    image: ISketchImage;
    rotateClasses: string[];
}

const SketchImage = ({ image, rotateClasses }: Props) => {
    const rotateClass =
        rotateClasses[Math.floor(Math.random() * rotateClasses.length)];

    return (
        <div
            key={image.name}
            className={`m-4 h-full relative ${image.width} ${image.top} ${
                image.name !== "speakers" && rotateClass
            }`}
        >
            <Image
                objectFit="contain"
                src={image.image.url}
                alt=""
                layout="fill"
                className=""
            ></Image>
        </div>
    );
};

export default SketchImage;
