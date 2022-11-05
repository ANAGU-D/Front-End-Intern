import React from 'react';
import '../Styles/contact.css'
const ContactMe = ()=>{
    return(
        <div className='wrapper'>
            <div className='content'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask about anything you have in mind</p>
            </div>

            <div className='form'>
                <div className='top-form'>
                    <div className='inner-form'>
                        <label>First Name</label>
                        <input type='text' placeholder='Enter your first name'  id='first_name'/>
                    </div>
                    <div className='inner-form'>
                        <label>Last Name</label>
                        <input type='text'placeholder='Enter your last name' id='last_name'/>
                    </div>
                </div>
                <div className='middle-form'>
                        <label>Email</label>
                        <input className='inputs'type= "email" placeholder='yourname@email.com' id='email'/>
                </div>
                <div className='buttom-form'>
                <label>Message</label>
                         <textarea placeholder='Send me a message and I"ll reply you as soon as possible...'  id='message'>
                         </textarea>
                </div>
                <div className='check-box'>
                        <input  type="checkbox"/> <p>You agree to providing you data to Daniel Anagu who may contact you.</p>
                </div>
                <button className='btn' id='btn__submit'> Send message</button>
            </div>
        </div>
    )
}

export default ContactMe;