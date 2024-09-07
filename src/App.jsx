import { useState } from 'react'
import TopWidget from './components/TopWidget'
import BottomWidget from './components/BottomWidget'
import './App.css'

function App() {

  return (
    <>
      <div className="main-box">
        <div className="left"></div>
        <div className="right">
          <TopWidget />
          <hr style={{width: '350px', height: '2px', borderColor: 'rgba(0, 0, 0, 0.658)', borderRadius: '2px'}} />
          <BottomWidget />
          <hr style={{width: '350px', height: '2px', borderColor: 'rgba(0, 0, 0, 0.658)', borderRadius: '2px'}} />
        </div>
      </div>
    </>
  )
}

export default App
