import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import postlist from '../posts.json';

import './components.css';


const PostList = () => {

    const excerptList = postlist.map(post => {
        return post.content.split(' ').slice(0, 20).join(' ') + '...';
    });

    return (
        <div className="postlist">
            <h1 className='title'>All Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (
                        <div className="post-card" key={post.id}>
                            <h2><Link className='links' to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr />
                            <Markdown rehypePlugins={[rehypeRaw]}>
                                {excerptList[i]}
                            </Markdown>
                            <small className='read-more'><Link className='links' to={`/post/${post.id}`}>Read more...</Link></small>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PostList;
