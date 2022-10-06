import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface Props {
    image: {
        name: string;
        image: StaticImageData;
        width: string;
        top?: string;
    };
    rotateClasses: string[];
}

const SketchImage = ({ image, rotateClasses }: Props) => {
    const [rotateClass, setRotateClass] = useState<string>(
        rotateClasses[Math.floor(Math.random() * rotateClasses.length)]
    );

    return (
        <div
            key={image.name}
            className={`m-4 relative ${image.width} ${image.top} ${
                image.name !== "speakers" && rotateClass
            }`}
        >
            <Image
                objectFit="contain"
                src={image.image}
                alt=""
                layout="responsive"
                className=""
            ></Image>
        </div>
    );
};

export default SketchImage;
