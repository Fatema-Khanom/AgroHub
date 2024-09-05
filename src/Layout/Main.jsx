

import { Outlet } from 'react-router-dom';
import  { StickyNavbar } from '../Components/Navbar/Navbar';
import { FooterWithSocialLinks } from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <FooterWithSocialLinks></FooterWithSocialLinks>
        </div>
    );
};

export default Main;