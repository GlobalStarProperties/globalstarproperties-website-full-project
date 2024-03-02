import { useState } from "react";
import { IoMdMenu, IoMdClose ,IoLogoWhatsapp } from "react-icons/io";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SidebarMenu = ({navContent, onClickBtn}) => {
    const [displayMenu, setDisplayMenu] = useState(false)

    const onClickMenu = () => {
        setDisplayMenu(!displayMenu);
    }

    return (
        <div className="sidebar-Menu-Container">
            <span className="menu-Btn" onClick={onClickMenu}><IoMdMenu/></span>
            <div className="sidebar-Menu" style={{right: displayMenu ? '0px' : '-700px' }}>
                <div className="menu">
                    <span className="menu-Btn" onClick={onClickMenu}><IoMdClose/></span>
                    <ul>
                        {navContent.map((item, index) => <li key={index}><Link to={`${item.path}`}>{item.title}</Link></li>)}
                    </ul>
                    <Button text={'Whatsapp Us'} icon={<IoLogoWhatsapp/>} iconColor={'green'} onClick={onClickBtn}/>
                </div>
            </div>
        </div>
    );
}

export default SidebarMenu;
