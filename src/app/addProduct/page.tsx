import React from 'react';
import DashboardLayout from '../dashboard/page';

const page = () => {
    return (<>
    <DashboardLayout> 
        <div>
            <h1 className='text-rose-500 mt-[4rem]'>hello out of component section in add product page</h1>
        </div>
        </DashboardLayout>
        </>
    );
};

export default page;