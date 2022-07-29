import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <header className='px-1'>
            <h1>
                    Glorieuse Rachelle Norzea
            </h1>
            <nav>
                <ul className='flex-row'>
                    <li className="mx-1">
                        <a href="#about"
                            onClick={() => handlePageChange('AboutMe')}
                            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link-active'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#contact"
                            onClick={() => handlePageChange('ContactForm')}
                            className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link-active'}
                        >
                            Get In Touch
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link-active'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link-active'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;