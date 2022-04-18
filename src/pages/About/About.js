import React from 'react';
import './About.css';
import soroar from "../../images/soroar111.jpg";


const About = () => {
    return (
        <div className='about-container container'>
            <div className='aaa'>
                <img className='w-100 aaa' src={soroar} alt="" />
            </div>
            <div className='text-center bbb'>
                <h2 className='text-center'>Soroar Mia</h2>
                <p>Hi there! I passed 4 month under learning web development.It has increased my confident and interest .Now i want to work 8 hours a day to achieve my goal. </p>
                <br />
                <p>I tell mysself if a normal employee can work 9 to 5 job why can't i work just 8 hours a day for my goal? I get motivated myself. I went to work harder , every single day.I 
                    will be trying for my goal. i will giv as long as it takes every day but i want my dream comes true.
                </p>
            </div>
        </div>
    );
};

export default About;