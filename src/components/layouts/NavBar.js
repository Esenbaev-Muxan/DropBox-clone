import React from 'react';
import { useAuth } from './../store/AuthStore';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <nav className="bg-black -400 sm:px-4 py-2.5 dark:bg-gray-900 py-5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                
                <div onClick={() => navigate("/")} className="text-white text-5xl font-semibold cursor-pointer">
                    <img src={"https://easydigitaldownloads.com/wp-content/uploads/2020/11/edd-dropbox-logo-updated-nov2020-v2s.png"} style={{height: "100px"}} />
                </div>
                <div className="flex">
                    <div className="  flex items-center justify-center px-3 py-1 border-transparent font-medium text-white bg-blue-700 hover:bg-zinc-50 hover:text-black mr-2">
                        <button onClick={() => navigate("/update-profile")}>Edit Profile</button>
                    </div>
                    <div className="  flex items-center justify-center px-3 py-1 border-transparent font-medium text-white bg-blue-700  hover:bg-zinc-50 hover:text-black ">
                        <button onClick={handleLogout}>Sign Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;