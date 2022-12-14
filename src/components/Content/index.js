import React from 'react';
import classes from '../Content/Content.module.css';
import nccImg from '../../assets/img/logoNCC.png';
import cssImg from '../../assets/img/css-icon.png';
import htmlImg from '../../assets/img/html-icon.png';
import urlImg from '../../assets/img/url-icon.png';


const Content = () => {
    const subHeader = <div className={classes.subHeader}>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>News</a></li>
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </div>
    return (<>
        {subHeader}
        <div className={classes['main-content']}>
            <div className={classes['content']}>
                <div className={classes.img}>
                    <img src={nccImg} alt='/' />
                </div>
                <div className={classes.about}>
                    <h3>Lorem ipsum dolor sit asmet?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                </div>
                <div className={classes.description}>
                    <div className={classes.item}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <img src={cssImg} alt='css-img' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <img src={htmlImg} alt='html-img' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                    </div>
                    <div className={classes.item}>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <img src={urlImg} alt='url-img' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                    </div>

                </div>
            </div>
            <div className={classes.footer}>
                <p>Copyright © 2021</p>
            </div>
        </div></>
    )
}

export default Content;
