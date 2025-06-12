import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;