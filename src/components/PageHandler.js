import React, { useState } from 'react';
import AboutMe from './Pages/AboutMe';
import ContactForm from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Nav from './Nav';


function PageHandler() {
    const [currentPage, setCurrentPage] = useState('ContactForm')

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'ContactForm') {
            return <ContactForm />;
        }
       if (currentPage === 'Portfolio') {
        return <Portfolio />;
       }
       if (currentPage === 'Resume') {
        return <Resume />;
       }
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
      
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
       
        {renderPage()}
      </div>
    );
}
export default PageHandler