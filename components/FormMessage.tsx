import React from "react";

interface Props {
    showFormMessages: boolean;
    formMessages: string[];
    messageToMatch: string;
}

const FormMessage = ({
    showFormMessages,
    formMessages,
    messageToMatch,
}: Props) => {
    return (
        <>
            {showFormMessages && (
                <div
                    className={`absolute z-10 text-xl top-1/2 w-80 text-center bg-white p-2 rounded-lg border-2 drop-shadow-md ${
                        formMessages.includes(messageToMatch)
                            ? ""
                            : "text-red-500 border-red-500"
                    }`}
                >
                    {formMessages.map((message) => (
                        <div key={message}>{message}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default FormMessage;
