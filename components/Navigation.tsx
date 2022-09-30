import React, { useState, useEffect } from "react";

interface Props {}

const Navigation = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return <div className="bg-red-500 fixed z-10 w-full">Navigation</div>;
};

export default Navigation;
