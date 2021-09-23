import React from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Main.css'

const Main = () => {
    return (
        <div className="main-container">
            <Left />
            <Right />
        </div>
    );
};

export default Main;