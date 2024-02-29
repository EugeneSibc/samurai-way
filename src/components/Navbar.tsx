import React from 'react';

type NavbarProps = {

} 

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className='nav'>
            <div>
                Messages
            </div>
        </nav>
    );
};

export default Navbar;