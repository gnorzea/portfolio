import React from 'react';
import ResumePic from '../../../assets/Images/Resume.png';
import ResumeLink from '../../../assets/pdf/Resume.pdf'

function Resume() {
    return (
        <section className='resume' >
             <button  >
            <a href={ResumeLink} target="_blank" rel="noopener noreferrer"> Resume
            </a>
            </button>
            <div  >
            <a href={ResumeLink} target="_blank" rel="noopener noreferrer">
                <img src={ResumePic} alt="Resume" style={{ width: "80%" }}>
                </img>
            </a>
            </div>
            

        </section>
    )
}

export default Resume;