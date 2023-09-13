import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import FooterNav from './Components/Footer';

function App() {
  return (
    <>
    <div className='relative'>
      <div >
      <Navbar/>
      <div className='h-auto w-screen'>
     <Outlet/>
      </div>
      </div>
    </div>
      <FooterNav className='relative bottom-0'/>
    </>
  );
}

export default App;
