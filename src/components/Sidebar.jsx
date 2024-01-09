import React from "react";
import './Sidebar.css';
import Home from '../assets/home.svg?react';
import Search from '../assets/search.svg?react';
import Library from '../assets/bookmark.svg?react';

const myPlaylist = [
    {
        id : 1,
        name : 'arijit Singh'
    },
    {
        id : 2,
        name :'Rupam Islam'
    },
    {
        id : 3,
        name : 'anupam roy'
    },
    {
        id : 4,
        name : 'Atif aslam'
    }, 
    {
        id : 5,
        name : 'KK'
    },
    {
        id : 6,
        name : 'hello ji'
    }, 
    {
        id : 7,
        name : 'kaise ho'
    }, 
    {
        id : 8,
        name : 'saare'
    }, 
    {
        id : 9,
        name :'ram ram bhai'
    }, 
    {
        id : 10,
        name: 'saare ne'
    }
];


function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-items">
                <Home width={'18px'} strokeWidth={'2px'}/> Home
            </div>
            <div className="sidebar-items">
                <Search width={'18px'} strokeWidth={'2px'}/> Search
            </div>
            <div className="sidebar-items">
                <Library width={'18px'} strokeWidth={'2px'}/> Library
            </div>
            <div className="side-options">
                {myPlaylist.map((item)=> {
                    return (
                        <div className="sidebar-items" key={item.id}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar;