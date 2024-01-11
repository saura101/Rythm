import React, { useState } from "react";
import Play from '../assets/play.svg?react';
import Pause from '../assets/pause.svg?react';
import Next from '../assets/next.svg?react';
import Prev from '../assets/previous.svg?react';
import './Footer.css'

function Footer() {
    const [isplaying,setIsPlaying] = useState(false);
    return (
        <div className="footer-container">
            <div className="player-control">
            <Prev width={'32px'}/>
            {isplaying?
            <Pause width={'32px'} onClick={()=>{ setIsPlaying(false) }}/>
            :
            <Play width={'32px'} onClick={()=>{ setIsPlaying(true) }}/>}
            <Next width={'32px'}/>
            </div>
            {/* <Pause/> */}
        </div>
    )
}

export default Footer;