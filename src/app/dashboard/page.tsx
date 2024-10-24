'use client';
import React from 'react';
import { Layout } from 'antd';
import SideNavigationBar from '../components/SideNavigationBar/page';


const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="dashboard-container flex gap-8 w-full">
                <div className="sidebar">
                    <SideNavigationBar />
                </div>
                <div className="w-full ">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
