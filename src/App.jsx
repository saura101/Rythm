import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Playlist from './components/Playlist'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <div className='player-container'>
          <div className='side-bar'>
            <Sidebar/>
          </div>
          <div className='playlist'>
            <Playlist/>
          </div>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </>
  )
}

export default App
