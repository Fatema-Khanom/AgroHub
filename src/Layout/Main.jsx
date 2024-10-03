

import { Outlet } from 'react-router-dom';
import  { StickyNavbar } from '../Components/Navbar/Navbar';
import { FooterWithSocialLinks } from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;