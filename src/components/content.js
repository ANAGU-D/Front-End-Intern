import React from 'react';
import '../Styles/content.css'
import Profile from '../img/ProfilePic.jpg';
import slack from "../img/slack.svg";
import github from "../img/Social_icon.svg";
import share from "../img/Icon-md.png";
import share2 from '../img/Icon-sm.png';


const Content = () =>{
    return(
   <main>
    <div className='content-container'>
        <div className='share'>
        <img src={share} alt="share"/>
        </div>
        <div className="share2">
        <img src={share2} alt="share2"/>
        </div>
        <div className='profile'>
        <img id='profile__img' className="image" src={Profile} alt='profilePicture'/>
       <h1>Daniel Anagu</h1>
       <h1 id='slack'>Daniel Anagu</h1>
        </div>
        <div className='Links'>
        <a href='#' id='twitter' className='link'>Twitter Link</a>
        <a href='https://training.zuri.team/'id='btn__zuri' className='link'>Zuri Team</a>
        <a href='http://books.zuri.team/'className='link' id='books'>Zuri Books</a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<DanielAnagu>'className='link'id='book__python'>Python Books</a>
        <a href='https://background.zuri.team/' id='pitch' className='link'>Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules' id='book__design' className='link'>Design Books</a>
        <a href='/contact' id='contact' className='link'>Contact Me</a>
    </div>
    <div className='social'>
        <img src={slack} alt="Slack"/>
        <img src={github} alt="Slack"/>
    </div>
    </div>
   </main>
    )
}
export default Content;