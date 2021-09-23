import React from 'react';

const Recentvideos = (props) => {
    return (
        <div>
            <ul>
                <li>{props.video}</li>
            </ul>
        </div>
    );
};

export default Recentvideos;