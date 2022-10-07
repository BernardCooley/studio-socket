import React, { useEffect, useState } from "react";
import SketchImage from "../AuthImage";
import { ImageProps, rotateClasses } from "./imageProps";
import { IFirebaseImage, ISketchImage } from "../../types";
import { randomTextPart } from "../../testData";

const imageNames = [
    "rytm_sketch",
    "synth_sketch",
    "deck_sketch",
    "headphones_sketch",
    "interface_sketch",
    "mixer_sketch",
];

interface Props {
    images: IFirebaseImage[] | undefined;
}

const AuthHero = ({ images }: Props) => {
    const [ImagePropsWithImage, setImagePropsWithImage] = useState<
        ISketchImage[]
    >([]);

    useEffect(() => {
        if (images && images.length > 0) {
            const imgs = ImageProps.map((imageProps) => {
                imageProps.image = images.filter(
                    (image) => image.name === imageProps.name
                )[0];
                return imageProps;
            });
            setImagePropsWithImage(imgs);
        }
    }, [images]);

    const getImageProp = (name: string) => {
        return ImagePropsWithImage.filter((image) => image.name === name)[0];
    };

    return (
        <div className="text-offWhite relative flex-col items-center justify-center h-full flex">
            <div className="rounded-3xl w-full h-full p-10 bg-woodFloor bg-full overflow-hidden shadow-black shadow-2xl">
                <div className="flex flex-col justify-between h-full lang='en'">
                    <p className="leading-7 lg:leading-10 text-lg lg:text-xl z-10">
                        {randomTextPart}
                    </p>
                    <div className="relative my-5 bg-table bg-cover p-16 h-auto rounded-3xl xl:rounded-full flex justify-around items-center z-10 shadow-black shadow-2xl flex-wrap">
                        {ImagePropsWithImage.length > 0 && (
                            <>
                                <div className="scale-85 h-28 absolute left-0 xl:left-10 top-10">
                                    <SketchImage
                                        key={
                                            getImageProp("speakers_sketch").name
                                        }
                                        image={getImageProp("speakers_sketch")}
                                        rotateClasses={rotateClasses}
                                    />
                                </div>
                                {imageNames.map((name) => (
                                    <div key={name} className="scale-85 h-28">
                                        <SketchImage
                                            key={getImageProp(name).name}
                                            image={getImageProp(name)}
                                            rotateClasses={rotateClasses}
                                        />
                                    </div>
                                ))}
                                <div className="scale-85 h-28 absolute right-0 xl:right-10 top-10">
                                    <SketchImage
                                        key={
                                            getImageProp("speakers_sketch").name
                                        }
                                        image={getImageProp("speakers_sketch")}
                                        rotateClasses={rotateClasses}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <p className="leading-7 lg:leading-10 text-lg lg:text-xl z-10">
                        {randomTextPart}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthHero;
