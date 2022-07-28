import React from 'react';
import Profile from '../../../assets/Images/profile.png';

function AboutMe() {
    return (
        <section className ="about-me">
            <div>
                <img className = "profile" src={Profile} alt="Profile"  style={{ width: "50%" }}></img>
                <p> Colossians 3:23-24 <br/>
                In all the work you are doing, work the best you can. Work as if you were doing it for the Lord, not for people.Remember that you will receive your reward from the Lord, which he promised to his people. You are serving the Lord Christ." 
            </p>
            <h2> About Me</h2>
            <p>Full Stack Developer (loading)!</p>
            </div>
        </section>
    );
}

export default AboutMe;