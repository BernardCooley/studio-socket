import React from "react";

interface Props {
    showFormMessages: boolean;
    formMessages: string[];
}

const FormDialog = ({ showFormMessages, formMessages }: Props) => {
    return (
        <>
            {showFormMessages && (
                <div
                    className={`absolute z-10 text-xl top-1/2 w-80 text-center p-2 rounded-lg border-2 drop-shadow-md text-error border-error`}
                >
                    {formMessages.map((message) => (
                        <div key={message}>{message}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default FormDialog;
