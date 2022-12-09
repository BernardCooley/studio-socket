import React, { forwardRef, LegacyRef, useState } from "react";

interface Props {
    name: string;
    id: string;
    label: string;
    className?: string;
    inputClassName?: string;
    defaultValue?: string;
    type: string;
    errorMessages: string[];
}

const CustomTextInput = forwardRef(
    (
        {
            name,
            id,
            label,
            className,
            inputClassName,
            defaultValue,
            type,
            errorMessages,
        }: Props,
        ref: LegacyRef<HTMLInputElement> | undefined
    ) => {
        const [value, setValue] = useState(defaultValue);

        return (
            <div className={`customInput flex flex-col-reverse ${className}`}>
                <div className="text-error text-sm min-h-val">
                    {errorMessages.length > 0 &&
                        errorMessages.map((error) => (
                            <div key={JSON.stringify(error)}>{error}</div>
                        ))}
                </div>
                <input
                    className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none leading-10 bg-transparent text-primary pl-3 placeholder-transparent ${inputClassName} ${
                        errorMessages.length > 0 ? "border-error" : ""
                    }`}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                    ref={ref}
                />
                <label
                    className={`transition-transform top-0 relative peer-placeholder-shown:text-transparent peer-placeholder-shown:top-7 ${
                        errorMessages.length > 0
                            ? "text-error"
                            : "text-formLabel"
                    }`}
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
        );
    }
);

CustomTextInput.displayName = "CustomTextInput";

export default CustomTextInput;
