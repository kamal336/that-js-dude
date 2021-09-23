import React, { useEffect, useState } from 'react';
import Recentvideos from '../components/Recentvideos/Recentvideos';
import Talks from '../components/Talks/Talks';
import './Training.css'

const Training = () => {
    const [videos,setVedeos] = useState([]);
    useEffect(()=>{
        fetch('./videos.json')
        .then(res=> res.json())
        .then(data => setVedeos(data))
    },[])
    return (
        <div>
            <h2 className="headingStyle">Personal Training for $30</h2>
            <p style={{fontSize:'17px'}}>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
            <h2 className="headingStyle">Recent Videos</h2>
            {
                videos.map(video => <Recentvideos video={video.video}/>)
            }
            <button style={{padding:'5px 15px',borderRadius:'7px'}}>View details</button>
            <Talks />
            
        </div>
    );
};

export default Training;