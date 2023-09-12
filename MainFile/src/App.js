import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import FooterNav from './Components/Footer';

function App() {
  return (
    <div >
      <div >
      <Navbar/>
      <div className='h-screen w-auto'>
     <Outlet/>
      </div>
      <FooterNav/>
      </div>
    </div>
  );
}

export default App;
