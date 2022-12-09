import React from "react";
import { testCopyFull } from "../../testData";

interface Props {}

const Dashboard = ({}: Props) => {
    return (
        <div className="dashboard" data-testid="dashboard">
            <p>{testCopyFull}</p>
        </div>
    );
};

export default Dashboard;
