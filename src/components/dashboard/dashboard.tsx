import React from "react";
import './dashboard.css'
import Charts from "../charts/charts";
import Messages from "../messages-container/messages";

const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
            <div className="charts-line">
                <Charts/>
            </div>
            <div className='messages-wrapper'>
                <Messages/>
            </div>
        </div>
    )
}

export default Dashboard;
