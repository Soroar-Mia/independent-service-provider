import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-center  mt-5 bg-secondary'>
            <p><small className='App-header'>copyright &copy; {(new Date().getFullYear())}</small></p>
            <br />
            <h3 className='App-header'>For more information, please contact:</h3>
            <h5 className='App-header'>Gmail:miasoroar@gmail.come</h5>
        </footer>
    );
};

export default Footer;