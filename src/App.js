import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('Dark');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "Dark"){
      setMode("Light");
      document.title = "TextUtils | Home (Light)";
    }
    else{
      setMode("Dark");
      document.title = "TextUtils | Home (Dark)";
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <div className={`contain${mode}`}>
      <Navbar title="TextUtils" about="About" mode={mode} modeFunc={toggleMode}/>
      <Alert alert={alert}/>  
      <Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </div>
  );
}

export default App;