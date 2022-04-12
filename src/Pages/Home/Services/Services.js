import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <h1 className='services-title'>Our Services</h1>
            <div className="services-container">
            {
                services.map(service => <Work key={service.id} service={service}></Work>)
            }
            </div>
        </div>
    );
};

export default Services;