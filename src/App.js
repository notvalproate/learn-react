import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('Dark');

  const toggleMode = () => {
    if(mode === "Dark"){
      setMode("Light");
    }
    else{
      setMode("Dark");
    }
  }

  return (
    <div className={`contain${mode}`}>
      <Navbar title="TextUtils" about="About" mode={mode} modeFunc={toggleMode}/>
      <Textform heading="Enter the text to analyze" mode={mode}/>
    </div>
  );
}

export default App;