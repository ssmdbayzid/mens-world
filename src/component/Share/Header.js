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
                <div className='justify-between'>
                    <div >
                        <a href='/' className='flex items-center w-full py-1'>
                        <img src={logo} className="w-[75px]" alt='' />
                        <h1 className='p-2 text-2xl w-[200px] font-[600]'>Mens World</h1>
                        </a>
                    </div>
                    <div onClick={()=>setOpen(!open)} className={`w-12 text-4xl md:hidden`}>
                        {open? < CgClose /> : <BiMenu /> }
                    </div>
                </div>
                <ul className={`md:flex text-center w-full bg-cyne-100 justify-center md:sticky absolute duration-1000 ease-in-out ${open ? 'top-6': 'top-[-450px]'}`}>
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