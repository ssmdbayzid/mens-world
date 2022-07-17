import React, { useState } from 'react';
import logo from './../../images/mw logo.png'
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Products', link: '/products'},
        {id: 3, name: 'Order', link: '/order'},
        {id: 4, name: 'Log In', link: '/log-in'},
        {id: 5, name: 'Sign Up', link: '/sign-up'},
    ]

    return (
        <div className='bg-green-100 shadow'>
            <nav className=' container mx-auto md:flex md:items-center md:justify-between'>
                <div className='flex items-center justify-between'>
                    <div className='flex md:block'>
                        <a href='/' className='md:flex text-center items-center py-4 md:py-2'>
                        <img src={logo} className=" w-[50px] md:w-[75px] mx-auto" alt='' />
                        <h1 className='md:p-2 pl-2 text-lg w-[100px]  md:text-2xl md:w-[150px] md:font-[600] font-[300]'>Mens World</h1>
                        </a>
                    </div>
                    <div onClick={()=>setOpen(!open)} className={`w-12 text-4xl md:hidden`}>
                        {open? < CgClose /> : <BiMenu /> }
                    </div>
                </div>
                <ul className={`md:flex mx-auto text-center bg-cyne-100 justify-center md:sticky absolute duration-1000 ease-in-out ${open ? 'top-6': 'top-[-450px]'}`}>
                    {/* <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Home</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Products</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Log In</a></li>
                    <li className='mx-2 hover:text-cyan-700 font-semibold'><a href='/#'>Log Out</a></li> */}

                    {
                        routes.map(route=><li
                        key={route.id}
                        ><a href={route.link}
                        className="mx-2 hover:text-cyan-700 font-bold"
                        >{route.name}</a></li>)
                    }
                </ul>
            </nav>

        </div>
    );
};

export default Header;