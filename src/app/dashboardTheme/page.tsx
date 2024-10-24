'use client';
import { Button, Layout, Menu, Dropdown, Space, MenuProps } from 'antd';
import React from 'react';
import DashboardLayout from '../dashboard/page';
const { Header, Content, Sider } = Layout;
import { BsPlusLg } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import DashboardHeader from '../pages/DashboardThemeHead/page';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];
const notification: MenuProps['items'] = [
    {
        label: <div>
            <a href="https://www.antgroup.com">1st menu item1111111111111111</a>

        </div>,

        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

const page = () => {
    return (<>
        <DashboardLayout>
            <div className='w-full'>
                <div className='w-full m-auto '>
                    <DashboardHeader/> 
                </div>

                <Layout className="site-layout">
                    {/* <Header
                        style={{
                            padding: 0,
                            background: '#fff',
                            borderBottom: '1px solid #e0e0e0',
                            textAlign: 'center',
                        }}
                    >
                        
                    </Header> */}
                    <Content style={{ margin: '16px' }}>
                        <div
                            style={{
                                padding: 24,
                                background: '#fff',
                                minHeight: 360,
                            }}
                        >
                            {/* Main Content (e.g., dashboard cards, charts, etc.) */}
                            <div className="dashboard-summary">
                                {/* Sample Cards */}
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="card">
                                        <h3>Total Expense</h3>
                                        <p>$58,420</p>
                                    </div>
                                    <div className="card">
                                        <h3>Gross Profit</h3>
                                        <p>$237,813</p>
                                    </div>
                                    {/* Add more summary cards as needed */}
                                </div>

                                {/* Sample Chart */}
                                <div className="chart">
                                    <h3>Profit & Loss Overview</h3>
                                    {/* Add chart or other content */}
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        </DashboardLayout>
    </>
    );
};

export default page;