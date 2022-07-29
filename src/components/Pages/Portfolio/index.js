import React from 'react';
import GudEats from '../../../assets/Images/GudEats.png';
import RunBuddy from '../../../assets/Images/Run-Buddy.png';
import Taskem from '../../../assets/Images/taskem.png';
import CodeQuiz from '../../../assets/Images/CodeQuiz.png';
import Password from '../../../assets/Images/Password.png';
import Scheduler from '../../../assets/Images/Scheduler.png';


function Portfolio (){
return (
  <section className='portfolio '>
        
    <div className='mx-2'>
    <button>
        <a href="https://miscmich.github.io/congenial-engine/?" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>GudEats</a>
        </button>
        <a href="https://miscmich.github.io/congenial-engine/?" target="_blank" rel="noopener noreferrer">
            <img src={GudEats} alt="GudEats screenshot" style={{ width: "100%" }}></img>
        </a>
    </div>
    <div className='mx-2'>
    <button>
        <a href="https://gnorzea.github.io/run-buddy/?" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Run Buddy</a>
        </button>
        <a href="https://gnorzea.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
            <img src={RunBuddy} alt="RunBuddy screenshot" style={{ width: "100%" }}></img>
        </a>
    </div>
    <div>
    <button className='mx-2'>
        <a href="https://gnorzea.github.io/taskem/?" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Taskem</a>
        </button>
        <a href="https://gnorzea.github.io/taskem/" target="_blank" rel="noopener noreferrer">
            <img src={Taskem} alt="Taskem screenshot" style={{ width: "100%" }}></img>
        </a>
    </div>
    <div>
    <button className='mx-2'>
        <a href="https://gnorzea.github.io/Code-Quiz/?" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Code Quiz</a>
        </button>
        <a href="https://gnorzea.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
            <img src={CodeQuiz} alt="Code-Quiz screenshot
        " style={{ width: "100%" }}></img>
        </a> 
    </div>
    <div>
    <button className='mx-2'>
        <a href="https://gnorzea.github.io/Password-Generator/?" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Password Generator</a>
        </button>
        <a href="https://gnorzea.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
            <img src={Password} alt="password-generator screenshot
        " style={{ width: "100%" }}></img>
        </a> 
    </div>
    <div>
    <button className='mx-2'>
        <a href="https://gnorzea.github.io/Workday-Scheduler/" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Workday Scheduler</a>
        </button>
        <a href="https://gnorzea.github.io/Workday-Scheduler/" target="_blank" rel="noopener noreferrer">
            <img src={Scheduler} alt="workday-scheduler screenshot
        " style={{ width: "100%" }}></img>
        </a> 
    </div>

  </section>  
)

}

export default Portfolio;