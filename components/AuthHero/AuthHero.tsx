import React from "react";
import SketchImage from "../AuthImage";
import AuthTextSnippet from "../AuthTextSnippet";
import { Components, rotateClasses, xClasses, yClasses } from "./data";

interface Component {
    key: string;
    component: JSX.Element;
}

const AuthHero = () => {
    const getComponent = (type: string, data: any): Component => {
        if (type === "sketchImage") {
            return {
                key: data.name,
                component: (
                    <SketchImage
                        image={data}
                        rotateClasses={rotateClasses}
                        yClasses={yClasses}
                        xClasses={xClasses}
                    />
                ),
            };
        }

        return {
            key: data,
            component: (
                <AuthTextSnippet
                    content={data}
                    rotateClasses={rotateClasses}
                    yClasses={yClasses}
                    xClasses={xClasses}
                />
            ),
        };
    };

    const renderComponents = Components.map((comp): Component => {
        return getComponent(comp.type, comp.data);
    });

    return (
        <div className="text-white flex-col items-center justify-center flex-1 h-full flex">
            <h1 className="text-5xl mb-10">Studio Socket</h1>
            <div className="images flex flex-1 flex-wrap justify-center text-2xl p-12">
                {renderComponents.map((component) => (
                    <div className="flex-1 basis-1" key={component.key}>
                        {component.component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthHero;
