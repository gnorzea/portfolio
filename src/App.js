import React from 'react';
import Background from './assets/Images/background.png';
import PageHandler from './components/PageHandler';
import Footer from './components/Pages/Footer/index'

function App() {
    return (
        <body>
            
            <main>
                <PageHandler></PageHandler>
                <div style= {{backgroundImage: `url(${Background})`, position:'fixed',width: '100%', height: '100%', left: '0', top: '0', zIndex:-5}}>
            </div>
            </main>
            <Footer></Footer>
        </body>

    )

}

export default App;
