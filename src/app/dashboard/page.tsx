import React from 'react';
import DashboardLayout from '../components/dashboard/page';
import SideNavigationBar from '../components/SideNavigationBar/page';

const page = () => {
    return (
        <div>
            <div className='flex w-[96%] m-auto'>
                <div className=''>
                    <SideNavigationBar/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default page;