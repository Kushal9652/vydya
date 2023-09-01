import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{minHeight:'90vh' ,display:'flex',justifyContent:'center',alignItems:'center'}}>

     <Outlet/>
      </div>
    </div>
  );
}

export default App;
