import React, { useEffect, useState } from "react";
import SketchImage from "../AuthImage";
import { ImageProps, rotateClasses } from "./imageProps";
import { useFirebaseImages } from "../../hooks/useFirebaseImages";
import { ISketchImages } from "../../types";

const AuthHero = () => {
    const { images } = useFirebaseImages("sketches");
    const [ImagePropsWithImage, setImagePropsWithImage] = useState<
        ISketchImages[]
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

    const RenderImages = ImagePropsWithImage.map((imageProps): JSX.Element => {
        return (
            <SketchImage
                key={imageProps.name}
                image={imageProps}
                rotateClasses={rotateClasses}
            />
        );
    });

    return (
        <div className="text-white relative flex-col items-center justify-center flex-1 h-full flex">
            <h1 className="text-5xl mb-10">Studio Socket</h1>
            <div className="rounded-3xl w-full h-full p-10 bg-woodFloor bg-full overflow-hidden shadow-black shadow-2xl">
                <div className="flex flex-col justify-between h-full">
                    <p className="leading-10 text-xl z-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <div className="my-5 bg-table bg-cover h-48 rounded-full flex justify-around items-center z-10 shadow-black shadow-2xl">
                        {RenderImages.map((image) => (
                            <div className="scale-85 h-28" key={image.key}>
                                {image}
                            </div>
                        ))}
                    </div>
                    <p className="leading-10 text-xl z-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthHero;
