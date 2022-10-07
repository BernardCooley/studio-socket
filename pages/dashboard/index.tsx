import React from "react";
import { loremIpsumFull } from "../../testData";

interface Props {}

const Dashboard = ({}: Props) => {
    return (
        <div className="dashboard" data-testid="dashboard">
            <p>{loremIpsumFull}</p>
        </div>
    );
};

export default Dashboard;
