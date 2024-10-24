'use client';
import { Button, Layout, Menu, Dropdown, Space, MenuProps } from 'antd';
import React from 'react';
// import DashboardLayout from '../dashboard/page';
const { Header, Content, Sider } = Layout;
import { BsPlusLg } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                POS Sale
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Add New Sale
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Purchase
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Adjustment
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Expense
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Warehouse
            </a>
        ),
    },
    {
        key: '7',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add User
            </a>
        ),
    },
    {
        key: '8',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Supplier
            </a>
        ),
    },
    {
        key: '9',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Add Customer
            </a>
        ),
    },


];
const notification: MenuProps['items'] = [
    {
        label: <div>
            <a href="https://www.antgroup.com">1st menu item1111111111111111 </a>
        </div>,

        key: '0',
    },
    {
        type: 'divider',
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
const emailNotification: MenuProps['items'] = [
    {
        label: <div>
            <a href="https://www.antgroup.com">1st menu item1111111111111111 </a>
        </div>,

        key: '0',
    },
    {
        type: 'divider',
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
const countryDataSelected: MenuProps['items'] = [
    {
        label: <div>
            <a href="https://www.antgroup.com">1st menu item1111111111111111 </a>
        </div>,

        key: '0',
    },
    {
        type: 'divider',
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
const userProfile: MenuProps['items'] = [
    {
        label: <div>
            <a href="https://www.antgroup.com">1st menu item1111111111111111 </a>
        </div>,

        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },

];

const DashboardHeader = () => {
    return (
        <div >
            <div className='flex justify-between gap-0 mt-8'>
                <div className=''>
                    <div>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottom"
                            arrow={{
                                pointAtCenter: true,
                            }}
                            overlayStyle={{ width: '10rem' }}

                        >
                            <Button className='bg-blue-100 border-0'><BsPlusLg size={16} /></Button>
                        </Dropdown>
                    </div>
                </div>
                <div className='flex gap-8 mr-12'>
                    <div className='flex gap-6'>
                        <div>
                            <Dropdown menu={{ items: notification }} trigger={['click']}
                                overlayStyle={{
                                    width: '22rem',
                                    left: '70%',
                                    marginTop: '1rem'
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <IoIosNotificationsOutline size={28} color='gray' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div>

                            <Dropdown menu={{ items: notification }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <AiOutlineMail size={24} color='gray' />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div>

                            <Dropdown menu={{ items: notification }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>

                                        <TfiWorld size={20} color='gray' /> <span className='text-[gray]'>ENG</span> <IoIosArrowDown color='gray' />

                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div>
                            <hr className="border-none h-[3rem] bg-gray-300 w-[1px] " />
                        </div>

                    </div>
                    <div>
                        <div>
                            <Dropdown menu={{ items: notification }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <div className='flex'>
                                            {/* <a href=""> */}
                                            <div>

                                                <Image src="/Image/profileSample.jpg" className='w-[40px] h-[40px] rounded-[50%]' width={100} height={100} alt="Logo" />


                                            </div>
                                            {/* </a> */}
                                            <div className='pl-2'>
                                                <p className='text-[14px] font-medium text-[#111]  '>Tiasha</p>
                                                <span className='text-[14px] font-[500] text-slate-600'>Admin user</span>

                                            </div>

                                        </div>

                                    </Space>
                                </a>
                            </Dropdown>

                        </div>
                    </div>

                </div>

            </div>
            <hr className='my-2' />

        </div>
    );
};

export default DashboardHeader;