import React from 'react';

type NavbarProps = {

} 

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className='nav'>
            <div>
                Profile
            </div>
            <div>
                Users
            </div>
            <div>
                Messages
            </div>            
            <div>
                Groups
            </div>
            <div>
                Content
            </div>
            <div>
                News
            </div>
        </nav>
    );
};

export default Navbar;