import React from "react";
import SketchImage from "../AuthImage";
import { Components, rotateClasses } from "./data";

interface Component {
    key: string;
    component: JSX.Element;
}

const AuthHero = () => {
    const getComponent = (data: any): Component => {
        return {
            key: data.name,
            component: (
                <SketchImage image={data} rotateClasses={rotateClasses} />
            ),
        };
    };

    const renderComponents = Components.map((comp): Component => {
        return getComponent(comp.data);
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
                        {renderComponents.map((component) => (
                            <div className="scale-85" key={component.key}>
                                {component.component}
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
