import React from 'react';
import GudEats from '../../../assets/Images/GudEats.png';
import RunBuddy from '../../../assets/Images/Run-Buddy.png';
import Taskem from '../../../assets/Images/taskem.png';

function Portfolio (){
return (
  <section className='portfolio'>
    <div>
        <button>
        <a href="https://miscmich.github.io/congenial-engine/?" target="_blank" rel="noopener noreferrer">GudEats</a>
        </button>
    </div>
    <div className='inline'>
        <a href="https://miscmich.github.io/congenial-engine/?" target="_blank" rel="noopener noreferrer">
            <img src={GudEats} alt="GudEats screenshot" style={{ width: "60%" }}></img>
        </a>
    </div>
    <div>
        <button>
        <a href="https://gnorzea.github.io/run-buddy/?" target="_blank" rel="noopener noreferrer">Run Buddy</a>
        </button>
    </div>
    <div className='inline'>
        <a href="https://gnorzea.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
            <img src={RunBuddy} alt="RunBuddy screenshot" style={{ width: "60%" }}></img>
        </a>
    </div>
    <div>
        <button>
        <a href="https://gnorzea.github.io/taskem/?" target="_blank" rel="noopener noreferrer">Taskem</a>
        </button>
    </div>
    <div className='inline'>
        <a href="https://gnorzea.github.io/taskem/" target="_blank" rel="noopener noreferrer">
            <img src={Taskem} alt="Taskem screenshot" style={{ width: "60%" }}></img>
        </a>
    </div>
    <div>
        
    </div>

  </section>  
)

}

export default Portfolio;