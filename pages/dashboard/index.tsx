import React from "react";
import { randomTextFull } from "../../testData";

interface Props {}

const Dashboard = ({}: Props) => {
    return (
        <div className="dashboard" data-testid="dashboard">
            <p>{randomTextFull}</p>
        </div>
    );
};

export default Dashboard;
