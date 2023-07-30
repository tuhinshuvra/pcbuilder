import React from 'react';
import NavbarComponent from '../Navbar';
import FooterComponent from '../Footer';
import AllCategories from '../CategoriesShow/AllCategories';

const MainLayout = ({ children }) => {
    return (
        <div className=' container'>
            <NavbarComponent></NavbarComponent>
            <div className='min-vh-100'>
                {children}
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default MainLayout;

