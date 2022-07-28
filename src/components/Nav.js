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
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#contact"
                            onClick={() => handlePageChange('Blog')}
                            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                        >
                            Get In Touch
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
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