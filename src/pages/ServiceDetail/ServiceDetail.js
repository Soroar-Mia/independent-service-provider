import React from 'react';
import {useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <h3>Thanks for booking</h3>
        </div>
    );
};

export default ServiceDetail;