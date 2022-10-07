import React, { useState, useEffect } from "react";

interface Props {}

const Dashboard = ({}: Props) => {
    const [state, setState] = useState("");

    useEffect(() => {}, []);

    return (
        <div className="dashboard" data-testid="dashboard">
            Dashboard
        </div>
    );
};

export default Dashboard;
