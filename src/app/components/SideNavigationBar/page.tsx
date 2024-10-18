'use client'
import { Divider, Menu, MenuTheme, Switch } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiTwotoneAppstore } from "react-icons/ai";


const items = [
    {
        key: '1',
        icon: <AiTwotoneAppstore />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: <AiTwotoneAppstore />,
        label: 'Products',
        children: [
            {
                key: '3',
                label: 'Add product',
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

            // {
            //     key: 'sub1-2',
            //     label: 'Submenu',
            //     children: [
            //         {
            //             key: '5',
            //             label: 'Option 5',
            //         },
            //         {
            //             key: '6',
            //             label: 'Option 6',
            //         },
            //     ],
            // },
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

const SideNavigationBar = () => {
    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const [theme, setTheme] = useState<MenuTheme>('light');

    const changeMode = (value: any) => {
        setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value: any) => {
        setTheme(value ? 'dark' : 'light');
    };
    return (
        <div>
            <>
                <div className='mt-12 mx-[5rem]'>
                    <Image
                        src="/Image/login-logo.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className='mt-12'>
                    <Switch onChange={changeMode} /> <span className='text-[14px]'>Change Mode</span>
                    <Divider type="vertical" />
                    <Switch onChange={changeTheme} /> <span className='text-[14px]'>Change Style</span>
                    <br />
                    <br />
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode={mode}
                        theme={theme}
                        items={items}
                    />
                </div>
            </>
        </div>
    );
};

export default SideNavigationBar;
