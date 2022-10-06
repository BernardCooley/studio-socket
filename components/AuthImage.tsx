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
    yClasses: string[];
    xClasses: string[];
}

const SketchImage = ({ image, rotateClasses, yClasses, xClasses }: Props) => {
    const [rotateClass, setRotateClass] = useState<string>(
        rotateClasses[Math.floor(Math.random() * rotateClasses.length)]
    );
    const [yClass, setyClass] = useState<string>(
        yClasses[Math.floor(Math.random() * yClasses.length)]
    );
    const [xClass, setxClass] = useState<string>(
        xClasses[Math.floor(Math.random() * xClasses.length)]
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
