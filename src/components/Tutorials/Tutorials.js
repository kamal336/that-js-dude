import React, { useEffect, useState } from 'react';
import Tutorial from '../../Tutorial/Tutorial';
import './Tutorials.css'

const Tutorials = () => {
  const [tuotrials,setTutorials] = useState([]);

  useEffect(()=>{
    fetch('./tutorials.json')
    .then(res => res.json())
    .then(data => setTutorials(data))
  },[])
    return (
        <div className="tutorials">
          {
            tuotrials.map(tutorial => <Tutorial key={tutorial.id} title={tutorial.title} desc={tutorial.desc}/>)
          }
        </div>
    );
};

export default Tutorials;