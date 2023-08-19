'use client';

import { BiSearch } from 'react-icons/bi';

const FixedMenuItems = () => {
    return (
        <div className="w-full md:w-auto py-2 transition cursor-pointer">
         <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-bold px-6 hover:shadow-md ">
                About us
            </div>
            <div className="hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-1 text-center hover:shadow-md">
                Solutions
            </div>
            <div className="hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-2 text-center hover:shadow-md">
                Our Projects
            </div>
            <div className="hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-1 text-center hover:shadow-md">
                Contact
            </div>
         </div>
        </div>
    );
}

export default FixedMenuItems;