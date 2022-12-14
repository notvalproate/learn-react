import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <Textform heading="Enter the text to analyze"/>
    </>
  );
}

export default App;