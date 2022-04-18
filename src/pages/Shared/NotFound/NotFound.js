import React from 'react';
import sleep from '../../../images/sleep.avif';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Tutor is Sleeping</h1>
            <img className='w-100' src={sleep} alt="" />
        </div>
    );
};

export default NotFound;