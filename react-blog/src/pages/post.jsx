import { useParams, Navigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import Layout from '../components/layout'
import postlist from '../posts.json'
import './pages.css'


const Post = () => {
    const { id } = useParams()

    // Verificamos si el ID existe en los datos de los posts
    const post = postlist.find((p) => p.id === Number(id))

    // Si no se encuentra, redirigimos
    if (!post) {
        return <Navigate to="/404" replace />
    }

    return (
        <Layout>
            <div className="post">
                <h2>{post.title}</h2>
                <small>Published on {post.date} by {post.author}</small>
                <hr />
                <Markdown rehypePlugins={[rehypeRaw]}>
                    {post.content}
                </Markdown>
            </div>
        </Layout>
    );
}

export default Post;