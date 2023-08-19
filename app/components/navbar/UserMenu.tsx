'use client'

import { SafeUser } from '@/app/types';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import FixedMenuItems from './FixedMenuItems';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flext-row items-center gap-3">
                <div></div>
                <div 
                onClick={toggleOpen}
                className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-8 rounded-full hover:shadow-md transition cursor-pointer">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src= {currentUser?.image}/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <DropdownMenuItem 
                                onClick={() => {}}
                                label='My Appointments'
                                />
                                <DropdownMenuItem 
                                onClick={() => {}}
                                label='Profile'
                                />
                                <hr />
                                <DropdownMenuItem 
                                onClick={() => signOut()}
                                label='Logout'
                                />
                            </>
                        ) : (
                            <>
                                <DropdownMenuItem 
                                onClick={loginModal.onOpen}
                                label='Login'
                                />
                                <DropdownMenuItem 
                                onClick={registerModal.onOpen}
                                label='Sign up'
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;