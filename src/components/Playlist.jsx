import React from "react";
import './Playlist.css';

const playlist = [
    {
        id : 1,
        title : 'sugar',
        artist : 'maroon 5',
        album : 'V',
        duration : '3:45'
    }, 
    {
        id : 2,
        title : 'love you zindagi',
        artist : 'arigit singh',
        album : 'Dear Zindagi',
        duration : '4:15'
    },
    {
        id : 3,
        title : 'shape of you',
        artist : 'Ed Sheeren',
        album : 'divide',
        duration : '3:53'
    },
    {
        id : 4,
        title : 'see you again',
        artist : 'wiz khalifa',
        album : 'Furious 7',
        duration : '3:58'
    },
    {
        id : 5,
        title : 'dilbar',
        artist : 'neha kakkar',
        album : 'satyamev jayate',
        duration : '3:30'
    },
    {
        id : 6,
        title : 'lemonade',
        artist : 'diljit',
        album : 'soorma',
        duration : '3:15'
    },
    {
        id : 7,
        title : 'tera ban jaunga',
        artist : 'arijit singh',
        album : 'kabir singh',
        duration : '3:45'
    },
    {
        id : 8,
        title : 'dilbaro',
        artist : 'harshadeep kaur',
        album : 'raazi',
        duration : '3:40'
    }
]

function Playlist() {
    return (
        <div className="playlist-container">
           <div className="playlist-header">
                <div className="playlist-image-card">

                </div>
                <div className="playlist-body">
                    <p>PLAYLIST</p>
                    <h1>Best of YouTube</h1>
                </div>
           </div>
           <div className="playlist-list">
                <div className="list-id">
                    #
                </div>
                <div className="list-title">
                    TITLE
                </div>
                <div className="list-album">
                    ALBUM
                </div>
                <div className="list-duration">
                    DURATION
                </div>
           </div>
           <div className="list-container">
                {playlist.map((item)=>{
                    return (
                        <div className="playlist-list">
                            <div className="list-id">
                                {item.id}
                            </div>
                            <div className="list-title">
                                {item.title}
                            </div>
                            <div className="list-album">
                                {item.album}
                            </div>
                            <div className="list-duration">
                                {item.duration}
                            </div>
                        </div>
                    )
                })}
           </div>

        </div>
    )
}

export default Playlist;