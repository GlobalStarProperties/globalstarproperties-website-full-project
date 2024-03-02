import NavSection from '../NavSection/NavSection';
import  './Footer.scss';

const Footer = () => {
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
    return (
        <footer>
            <div className="logoContainer">
                <div className="logoImg">
                    <img className='logo' src="/image/logo/logo-pic.png" alt="Logo for footer" />
                </div>
                <h1>Global Star Properties</h1>
            </div>
            <NavSection navContent={navContent} />
            <hr />
            <p className='bottom-text'>Created by Marvelous Innocent @ <a href="http://marsteck.netlify.com/">Marsteck Technology</a></p>
        </footer>
    );
}

export default Footer;
