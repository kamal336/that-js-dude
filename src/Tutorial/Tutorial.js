import React from 'react';
import './Tutorial.css';

const Tutorial = (props) => {

    return (
        <div className="tutorial">
           <h2 className="tutorial-title">{props.title}</h2>
            <p style={{fontSize:'17px'}}>{props.desc}</p>
            <button style={{padding:'5px 10px',borderRadius:'5px'}}>View details</button>
        </div>
    );
};

export default Tutorial;