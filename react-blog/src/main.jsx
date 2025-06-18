import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
//import App from './App.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Post from './pages/post.jsx'
import NotFound from './pages/notfound.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)