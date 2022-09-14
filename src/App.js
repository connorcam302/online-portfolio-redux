import logo from './logo.svg';
import './App.css';
import HomeAnimation from './components/HomeAnimation';
import CustomNavbar from './components/navbar/CustomNavbar'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

function App() {

  return (
    <div className="App">
      <CustomNavbar/>
    </div>
  );
}

export default App;
