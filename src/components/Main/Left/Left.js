import React from 'react';
import './Left.css'
import Confusing from './../../Confusingpart/Confusing';
import Tutorials from '../../Tutorials/Tutorials';

const Left = () => {
    return (
        <div className="left">
            <Confusing />
            <Tutorials />
        </div>
    );
};

export default Left;