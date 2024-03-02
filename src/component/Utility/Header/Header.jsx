import { useMediaQuery } from "react-responsive";
import { IoLogoWhatsapp } from "react-icons/io";
import './Header.scss';
import Button from '../Button/Button';
import NavSection from '../NavSection/NavSection';
import SidebarMenu from './SidebarMenu';
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import logo from './image/favicon/logo.png';

const Header = ({onWhatsappClick}) => {
    const [activeNavLinkId, setActiveNavLinkId] = useState(0);
    //Navigation Content List
    const navContent = [
        {
            title: 'HOME',
            path: '/'
        }, 
        {
            title: 'SERVICES',
            path: '/services'
        },
        {
            title: 'ABOUT US',
            path: '/about'
        },
        {
            title: 'CONTACT',
            path: '/contact'
        }
    ];
    //For indicating active link on Navbar
    // const onActive = (id) => {
    //     setActiveNavLinkId(id);
    //     alert(id)
    // }

    //Funtion for Button
    const onClickBtn = () => {
        onWhatsappClick('contact');
    }

    const isPhoneOnly = useMediaQuery({
        query: '(max-width: 1000px)'
    })  
    const isDesktop = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    return (
        <header id="header">
                <Link to="/">
                    <div className="logoImg">
                        <img className='logo' src="/image/logo/logo-pic.png" alt="Logo for header" />
                        <h1>GSP</h1>
                    </div>
                </Link>
            <div className='navContainer'>
                 {isPhoneOnly && <SidebarMenu navContent={navContent} onClickBtn={onClickBtn} />} 
                 {isDesktop && <NavSection navContent={navContent} />}
                 {isDesktop && 
                        <div className="header-Btn">
                            <Button text={'Whatsapp Us'} icon={<IoLogoWhatsapp/>} iconColor={'green'}   onClick={onClickBtn}/>
                        </div>}
            </div>
        </header>
    );
}

export default Header;
