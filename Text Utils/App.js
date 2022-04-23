import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>

      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutUs="About"
        searchBar="Search"
      />

      <div className="container">
        <TextForm
          heading="Enter the text to analyze below."
        />

      </div>
    </>


  );
}

export default App;
