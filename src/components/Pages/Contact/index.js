import React, { useState } from 'react';  
import {validateEmail} from '../../../utils/helpers';
import ContactPhoto from '../../../assets/Images/contactme.png';


function ContactForm(){
    const [errorMessage, setErrorMessage] = useState(''); const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

           
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`This is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
            <form id="contact-form" onSubmit={handleSubmit}>
            <img src={ContactPhoto} alt="Contact"  style={{ width: "90%" }}></img>
            
                <div>
                    
                    <input type="text" placeholder= "Name.." defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                   
                    <input type="email" placeholder= "Email.." name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                
                    <textarea name="message" placeholder= "Message.." defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
                <div >
                </div>
            </form>
        </div>
    )
}

export default ContactForm;