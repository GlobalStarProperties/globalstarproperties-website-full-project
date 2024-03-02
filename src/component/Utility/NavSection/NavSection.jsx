import { Link } from 'react-router-dom';
import './NavSection.scss'

const NavSection = ({navContent}) => {
    // const onActive = (id) => {
    //     setActiveNavLinkId(id);
    //     alert(id)
    // }

    return (
        <nav>
            <ul>
                {navContent.map((item, index) => <li key={index}><Link to={`${item.path}`}>{item.title}</Link></li>)}
            </ul>
        </nav>
    );
}

export default NavSection;
