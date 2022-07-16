import React from 'react';
import logo from './../../images/mw logo.png'

const Header = () => {
    return (
        <div className='bg-green-100 shadow'>
            <nav className=' container mx-auto md:flex md:items-center md:justify-between'>
                <div>
                    <span className='items-center py-1 flex justify-center'>
                        <img src={logo} className="w-[75px]" alt='' />
                        <h1 className='p-2 text-2xl font-bold'>Mens World</h1>
                    </span>
                </div>
                <ul className='flex p-2 items-center z-[-] z-auto absolute lg:static w-full left-0 lg:w-auto lg:py-5 lg:pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Home</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Products</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Log In</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Log Out</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;