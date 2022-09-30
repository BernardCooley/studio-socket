import React from "react";
import SketchImage from "../AuthImage";
import AuthTextSnippet from "../AuthTextSnippet";
import { Components, rotateClasses, xClasses, yClasses } from "./data";

const AuthHero = () => {
    const getComponent = (type: string, data: any): JSX.Element => {
        if (type === "sketchImage") {
            return (
                <SketchImage
                    image={data}
                    rotateClasses={rotateClasses}
                    yClasses={yClasses}
                    xClasses={xClasses}
                />
            );
        }

        return (
            <AuthTextSnippet
                content={data}
                rotateClasses={rotateClasses}
                yClasses={yClasses}
                xClasses={xClasses}
            />
        );
    };

    const components = Components.map((comp): JSX.Element[] => {
        return getComponent(comp.type, comp.data);
    });

    return (
        <div className="text-white flex-col items-center justify-center flex-1 h-full flex">
            <h1 className="text-5xl mb-10">Studio Socket</h1>
            <div className="images flex flex-1 flex-wrap justify-center text-2xl p-12">
                {components.map((component) => (
                    <div className="flex-1 basis-1" key={component.toString()}>
                        {component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthHero;
