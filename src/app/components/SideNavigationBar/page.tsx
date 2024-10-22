










'use client';
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import { AiTwotoneAppstore } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

// const items = [
//   {
//     key: '1',
//     icon: <AiTwotoneAppstore />,
//     label: 'Dashboard',
//   },
//   {
//     key: '2',
//     icon: <AiTwotoneAppstore />,
//     label: 'Products',
//     children: [
//       {
//         key: '3',
//         label: <a href="/addProduct">Add product</a>, // Using anchor tag to replicate page navigation
//       },
//       {
//         key: '4',
//         label: 'Product list',
//       },
//       // Add other items here
//     ],
//   },
//   // Add more menu items like Trading, Expense, Reports, etc.
// ];

const items = [
        {
            key: '1',
            icon: <AiTwotoneAppstore />,
            label: <Link href="/dashboardTheme">Dashboard</Link>, 
            //    label: 'Dashboard',
        },
        {
            key: '2',
            icon: <AiTwotoneAppstore />,
            label: 'Products',
            children: [
                {
                    key: '3',
                    // label: 'Add product',
                    label: <Link href="/addProduct">Add product</Link>, 
                },
                {
                    key: '4',
                    label: 'Product list',
                },
                {
                    key: '5',
                    label: 'Category',
                },
                {
                    key: '6',
                    label: 'Brand',
                },
                {
                    key: '7',
                    label: 'Unit/Value',
                },
                {
                    key: '8',
                    label: 'Generate Barcode',
                },
                {
                    key: '9',
                    label: 'Add Adjustment',
                },
                {
                    key: '10',
                    label: 'Adjustment',
                }
    
            ],
        },
        {
            key: 'trading',
            label: 'Trading',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: '11',
                    label: 'Sales',
                },
                {
                    key: '12',
                    label: 'Purchase',
                },
              {
                key: '13',
                label: 'Invoices/Billing'
              }
            ],
        },
        {
            key: 'Expense',
            label: 'Expense',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: 'expense1',
                    label: 'Add Expense',
                },
                {
                    key: 'expense2',
                    label: 'Expense List',
                },
                {
                    key: 'expense3',
                    label: 'Expense Category',
                },
                {
                    key: 'expense4',
                    label: 'Payment Expense',
                },
            ],
        },
        {
            key: 'peoples',
            label: 'People',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: 'people1',
                    label: 'Add Customer',
                },
                {
                    key: 'people2',
                    label: 'Customer List',
                },
                {
                    key: 'people3',
                    label: 'Add Supplier',
                },
                {
                    key: 'people4',
                    label: 'Supplier list',
                },
                {
                    key: 'people5',
                    label: 'Add Biller',
                },
                {
                    key: 'people6',
                    label: 'Biller list',
                },
            ],
        },
        {
            key: 'userManagement',
            label: 'User Management',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: 'userManagement1',
                    label: 'Add User',
                },
                {
                    key: 'userManagement2',
                    label: 'User List',
                },
                {
                    key: 'userManagement3',
                    label: 'Create Role',
                },
            ],
        },
        {
            key: 'reports',
            label: 'Report',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: 'report1',
                    label: 'Sales Report',
                },
                {
                    key: 'report2',
                    label: 'Purchase Report',
                },
                {
                    key: 'report3',
                    label: 'Payment Report',
                },
                {
                    key: 'report4',
                    label: 'Product Report',
                },
                {
                    key: 'report5',
                    label: 'Purchase Report',
                },
                {
                    key: 'report6',
                    label: 'User Report',
                },
                {
                    key: 'report7',
                    label: 'Stock Report',
                },
                {
                    key: 'report8',
                    label: 'Warehouse Report',
                },
                {
                    key: 'report9',
                    label: 'Supplier Report',
                },
                {
                    key: 'report10',
                    label: 'Tax Report',
                },
                {
                    key: 'report11',
                    label: 'Discount Report',
                },
                {
                    key: 'report12',
                    label: 'Shipping Report',
                },
            ],
        },
        {
            key: 'transfer',
            label: 'Transfer',
            icon: <AiTwotoneAppstore />,
            children: [
                {
                    key: 'transfer1',
                    label: 'Add Transfer',
                },
                {
                    key: 'transfer2',
                    label: 'Transfer List',
                },
                
            ],
        },
        {
            key: 'warehouse',
            icon: <AiTwotoneAppstore />,
            label: 'Warehouse',
        },
    ];

const InventoryDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
//     <Layout style={{ minHeight: '100vh' }}>
  
 

//     <Layout className="site-layout">
//       <Header
//         style={{
//           padding: 0,
//           background: '#fff',
//           borderBottom: '1px solid #e0e0e0',
//           textAlign: 'center',
//         }}
//       >
//       </Header>
//       <Content style={{ margin: '16px' }}>
//         <div
//           style={{
//             padding: 24,
//             background: '#fff',
//             minHeight: 360,
//           }}
//         >
//           {children}
//         </div>
//       </Content>
//     </Layout>
//   </Layout>
<div>


<Sider
collapsible
collapsed={collapsed}
onCollapse={(value) => setCollapsed(value)}
// width="50%"
theme="light"
style={{
  background: '#fff',
  borderRight: '1px solid #e0e0e0',
}}
>
<div className="logo" style={{ padding: '20px', textAlign: 'center' }}>
  <Image src="/Image/login-logo.png" width={100} height={100} alt="Logo" />
</div>
<Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
</Sider>
</div> 
  );
};

export default InventoryDashboard;
 




// update latest end











