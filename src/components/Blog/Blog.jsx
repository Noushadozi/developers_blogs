import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faBookmark} />

import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const { addTime } = props;
    const { author_name, author_pic_url, date, main_image_url, reading_time, title, categories } = props.blog;
    return (
        <div className='blog'>
            <img className='main_img' src={main_image_url} alt="" />
            <div className='author_info_and_time'>
                <div className='author_info'>
                    <img src={author_pic_url} alt="" />
                    <div>
                        <h3 className='author_name'>{author_name}</h3>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <p className='reading_time'>{reading_time} min read {element}</p>
            </div>
            <h2 className='title'>{title}</h2>
            <p className='category'>{categories.map(category => <span>#{category} </span>)}</p>
            <p className='mark' onClick={()=>addTime(reading_time)}>Mark as read</p>
            <hr className='hr' />
        </div>
    );
};

export default Blog;