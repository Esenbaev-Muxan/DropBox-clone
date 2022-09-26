import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
    return (
        <>
            <NavBar/>
           
                 <div className="content">
                 <div className="content">
                 <div className="content">
                    <Outlet/>
            </div>
            </div>
            </div>
           
           
           
        </>
    );
};

export default Layout;