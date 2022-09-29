import React from "react";

interface Props {
    label: string;
    type: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: () => void;
    labelClassName?: string;
}

const CustomButton = ({
    label,
    type,
    className,
    onClick,
    labelClassName,
}: Props) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            <span className={labelClassName}>{label}</span>
        </button>
    );
};

export default CustomButton;
