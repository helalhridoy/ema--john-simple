import React from 'react';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className=''>
            <img className='h-20 m-auto  justify-center' src={logo} alt="" />
            <nav className='header_nav w-full text-[25px] text-orange-500  bg-black'>
                <a href="/shop">Shop</a>
                <a href="/review">Review Section</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;