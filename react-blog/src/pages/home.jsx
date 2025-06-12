import Layout from '../components/layout.jsx';
import PostList from '../components/postlist.jsx';
import './pages.css';

const Home = () => {
    return (
        <div>
            <Layout>
                <PostList />
            </Layout>
        </div>
    );
}

export default Home;