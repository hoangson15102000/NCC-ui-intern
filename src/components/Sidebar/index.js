import React from 'react';
import classes from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>News</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar
