import './components.css';


const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <p>&copy; probua {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;