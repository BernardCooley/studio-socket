import React from "react";

interface Props {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: () => void;
    labelClassName?: string;
    disabled?: boolean;
}

const CustomButton = ({
    label,
    type,
    className,
    onClick,
    labelClassName,
    disabled,
}: Props) => {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}
            type={type}
        >
            <span className={labelClassName}>{label}</span>
        </button>
    );
};

export default CustomButton;
