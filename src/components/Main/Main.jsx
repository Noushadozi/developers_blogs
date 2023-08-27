import React, { useState, useEffect } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('../../../public/developer.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className='main'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                    ></Blog>)
                }
            </div>
            <div className='interactive-section'>
                <div className='total-time'>
                    <p>Spent time on read : 177 min</p>
                </div>
                <div className='bookmarks'>
                    <h2 className='bookmarks-heading'>Bookmarked Blogs : 8</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;