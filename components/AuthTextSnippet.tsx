import React, { useState } from "react";

interface Props {
    rotateClasses: string[];
    content: string;
    yClasses: string[];
    xClasses: string[];
}

const AuthTextSnippet = ({
    rotateClasses,
    content,
    yClasses,
    xClasses,
}: Props) => {
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
            className={`flex m-8 justify-center items-center relative ${rotateClass} ${yClass} ${xClass}`}
        >
            <p className="w-32">{content}</p>
        </div>
    );
};

export default AuthTextSnippet;
