import React from "react";

interface Props {
    rotateClasses: string[];
    content: string;
    yClasses: string[];
    xClasses: string[];
}

const AuthTextSnippet = ({ content }: Props) => {
    return (
        <div className="flex m-6 justify-center items-center relative">
            <p className="w-28 2xl:w-32 text-lg 2xl:text-2xl">{content}</p>
        </div>
    );
};

export default AuthTextSnippet;
