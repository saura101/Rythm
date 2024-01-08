import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Playlist from './components/Playlist'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Hello world</h1>
      <Header/>
      <Footer/>
      <Playlist/>
      <Sidebar/>
    </>
  )
}

export default App
