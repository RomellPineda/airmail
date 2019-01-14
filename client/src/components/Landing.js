import React from 'react';
import Video from '../assets/sky.mp4';

const Landing = () => {

    return (
        <div>
            <video id="background-video" loop muted autoPlay>
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div >
                <h2 >AirMail</h2>
            </div>
        </div>
    )
};

export default Landing;