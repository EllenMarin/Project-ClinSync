import Image from "next/image";
import React from "react";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="w-full flex justify-center items-center h-screen">
            <div className="w-1/2 h-full flex items-center justify-center">{children}</div>
            <div className="hidden md:flex w-1/2 h-full bg-gray-100 relative">
                <Image 
                    src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={1000}
                    height={1000}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                />
            
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 items-center justify-center flex flex-col">
                <h1 className='font-bold text-center text-white '> Welcome to <br />
                    <span className='text-4xl text-primary opacity-100'>CLINSYNC </span>
                </h1>
                <p className='text-center text-white opacity-100'> Modern Healthcare Management </p>
            </div>
        </div>
        </div>
    )
}
export default AuthLayout;