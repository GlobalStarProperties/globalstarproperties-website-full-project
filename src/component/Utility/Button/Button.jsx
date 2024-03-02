import './Button.scss';
const Button = ({text, icon, iconColor, color, bgColor, onClick, ...others}) => {

    return (
        <div className='buttonContainer'>
            <button 
            style={{
                color: color, 
                backgroundColor: bgColor,
                ...others
            }}
            onClick={onClick}
            >
                <div className='btnContent'>
                    <span className='icon' style={{color: iconColor}}> {icon}</span>
                    <span className='text'>{text}</span>
                </div>
            </button>
        </div>
    );
}

export default Button;
