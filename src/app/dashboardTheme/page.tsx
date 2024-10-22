'use client';
import { Layout, Menu } from 'antd';
import React from 'react';
import DashboardLayout from '../dashboard/page';
const { Header, Content, Sider } = Layout;

const page = () => {
    return (<>
    <DashboardLayout> 
        <div>
            <h2>this is dashboard component Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus aperiam magnam quia laudantium quis unde consequatur nostrum at quod libero commodi porro, inventore eligendi officiis sunt vitae ut! Consectetur, quae.</h2>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: '#fff',
                        borderBottom: '1px solid #e0e0e0',
                        textAlign: 'center',
                    }}
                >
                    <h2>Dashboard</h2>
                </Header>
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