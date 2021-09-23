import React from 'react';

const Talk = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                <li>{props.talk}</li>
                
            </ul>
        </div>
    );
};

export default Talk;