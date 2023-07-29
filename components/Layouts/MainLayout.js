import React from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Navbar';

const MainLayout = ({ children }) => {
    return (
        <div className=' container'>
            <NavbarComponent></NavbarComponent>
            <div className=' min-vh-100'>

                {children}
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;

