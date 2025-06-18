import Header from './header.jsx';
import Footer from './footer.jsx';
import NavBar from './navbar.jsx';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <NavBar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;