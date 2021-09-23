import React, { useEffect, useState } from 'react';
import Talk from './../Talk/Talk';

const Talks = () => {
    const [talks,setTalks] = useState([]);
    useEffect(()=>{
        fetch('./talks.json')
        .then(res=> res.json())
        .then(data=> setTalks(data))
    },[])
    return (
        <div>
            <h2>Recent Talks</h2>
            {
                talks.map(talk => <Talk talk={talk.talk}/>)
            }
            <button style={{padding:'5px 15px',borderRadius:'7px'}}>View details</button>
        </div>
    );
};

export default Talks;