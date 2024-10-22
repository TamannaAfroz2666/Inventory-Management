'use client';
import React from 'react';
import { Layout } from 'antd';
import SideNavigationBar from '../components/SideNavigationBar/page';


const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="dashboard-container flex gap-2 w-full">
                <div className="sidebar w-[12%]">
                    <SideNavigationBar />
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
