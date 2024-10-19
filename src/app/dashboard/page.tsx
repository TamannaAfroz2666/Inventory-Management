// import React from 'react';
// import DashboardLayout from '../components/dashboard/page';
// import SideNavigationBar from '../components/SideNavigationBar/page';

// const page = () => {
//     return (
//         <div>
//             <div className='flex w-[96%] m-auto'>
//                 <div className=''>
//                     <SideNavigationBar/>
//                 </div>
//                 <div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default page;
'use client';
import React from 'react';
import { Layout } from 'antd';
// import SideNavigationBar from './SideNavigationBar'; // Import your sidebar
// import { useRouter } from 'next/router';
import SideNavigationBar from '../components/SideNavigationBar/page';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    // const router = useRouter();

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Sider width={256}>
                <SideNavigationBar />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <div className="text-center text-xl font-bold">Dashboard Header</div>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: '360px' }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
