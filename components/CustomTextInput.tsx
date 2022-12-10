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
            <div className={`relative pb-4 ${className}`}>
                <div className="text-error text-sm min-h-val">
                    {errorMessages.length > 0 &&
                        errorMessages.map((error) => (
                            <div key={JSON.stringify(error)}>{error}</div>
                        ))}
                </div>
                <input
                    className={`rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-primary bg-transparent border-0 focus:ring-0 peer ${inputClassName} ${
                        errorMessages.length > 0
                            ? "focus:border-error border-error focus:border-b border-b"
                            : "focus:border-primary focus:border-b"
                    }`}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ref={ref}
                    placeholder=" "
                />
                <label
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
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
