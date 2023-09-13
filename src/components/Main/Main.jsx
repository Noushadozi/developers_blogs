import React, { useState, useEffect } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);
    const [blog, setBlog] = useState([]);
    const [bookmark, setBookmark] = useState(0);

    useEffect(() => {
        fetch('developer.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    const addToBookMark = () => {
        const newNumber = bookmark + 1;
        setBookmark(newNumber);
    }

    const addTime = (addedTime) => {
        console.log('added', time);
        const newTime = parseInt(time) + parseInt(addedTime);
        setTime(newTime);
    }

    const addBlog = (title) => {
        const allBookmark = [blog, <h1 className='bookmarked-blog'>{title}</h1>];
        setBlog(allBookmark);
        addToBookMark();
    }

    return (
        <div className='main'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        addTime={addTime}
                        addBlog={addBlog}
                        key={blog.id}
                    ></Blog>)
                }
            </div>
            <div className='interactive-section'>
                <div className='total-time'>
                    <p>Spent time on read : {time} min</p>
                </div>
                <div className='bookmarks'>
                    <h2 className='bookmarks-heading'>Bookmarked Blogs : {bookmark}</h2>
                    {
                        blog
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;