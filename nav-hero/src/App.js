import React,{useState} from 'react'
import './App.css'

const App = () => {
  const [darkMode,setDarkMode] =useState(false)
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='container'>
        <nav className='nav-container'>
          <ul className='nav-list'>
            <li className='nav-item'>
              
                Simran
              
            </li>
            <li className='nav-item'>
              
                <button className='mode' onClick={toggleMode} >{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
              
            </li>
            
          </ul>
        </nav>
        <div className='hero'>
          <div className='hero-left'>
            <h1 className='hero-title'>Hello, World!</h1>
            <p className='hero-text'>Welcome to my website.</p>
          </div>
          <div className='hero-right'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/006/029/969/small_2x/blue-sky-skyscape-background-concept-free-vector.jpg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
