import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import pages from '../pages.json'
import Layout from '../components/layout.jsx';
import './pages.css';

const About = () => {

    // Busca el contenido de la pagina "about" en el archivo pages.json
    const page = pages.find((p) => p.filename === 'about.md');

    return (
        <Layout>
            <div className='about'>
                <h1 className='page-title'>This is the about page</h1>
                <div className="page-content">
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {page.content}
                    </Markdown>
                </div>
            </div>
        </Layout>
    );
}

export default About;