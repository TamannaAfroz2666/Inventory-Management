"use client"

import { useState } from "react";
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa6";
import { BsEyeSlashFill } from "react-icons/bs";
import { useRouter  } from "next/router";

const LoginPage = () => {
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('admin');
    const [checkbox, setCheckbox] = useState('');
    const [err, setErr] = useState({});
    const emailHandler = (e: any) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }
    const checkboxHandler = (e: any) => {
        setCheckbox(e.target.value);

    }

    const validationForm = () => {
        let storeData = {};
        if (!email) {
            storeData.email = 'Enter your email';
        }

        if (!password) {
            storeData.password = 'password required'
        }
        setErr(storeData);
        return Object.keys(storeData).length === 0;

    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        validationForm();

    }
    const passwordToggleShowing = () => {
        console.log('making password ');

    }
    //link add 

    const SubmitHandler = (event: any) =>{
        event.preventDefault();
        console.log('call');
        router.push('/DashboardLayout');
        
    }


    return (
        <div className="min-h-screen  w-[25%] m-auto xs:w-[90%] h-full sm:w-[80%] md:w-[80%] lg:w-[25%] xl:[25%] " >
            <div className="bg-stone-50  top-[8rem] relative shadow-xl xs:px-6 pt-[7rem] relative top-[6rem] shadow-none lg:top-[8rem] relative pt-2  ">
                <div className="p-12 flex justify-center items-center lg:p-8">
                    <Image
                        src="/Image/login-logo.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className="">
                    <div >
                        <form className="max-w-sm mx-auto  xs:py-4 lg:py-10" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="email"
                                        onChange={emailHandler}
                                        name="email"
                                        value={email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                    />
                                    <span className="right-8 relative mt-3 "> <FaRegUser size={16} color="gray" /></span>
                                </div>
                                {err.email && <p>{err.email}</p>}
                            </div>
                            <div className="mb-5">
                                <div className="flex">
                                    <input type="password" id="password" name="password" value={password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={passwordHandler} />
                                    <span className="right-8 relative mt-3 " onClick={passwordToggleShowing}> <BsEyeSlashFill size={16} color="gray" /></span>
                                </div>
                                {err.password && <p>{err.password}</p>}
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <a href="/forgetPassword">
                                        <span className="text-blue-600/100 text-[14px]"> Forget Password ? </span>
                                    </a>
                                </div>
                            </div>
                            <button type="submit" className="text-white w-90 p-2.5 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4
                             focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  
                             text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={SubmitHandler}>Submit</button>
                             <p className="text-[#111] text-[15px] pt-4 text-center tracking-[.5px]"> Have not an account? 
                            <span>
                                <a className="text-blue-600/100 text-[15px] pl-1" href="/">Register?</a>
                            </span>
                        </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;