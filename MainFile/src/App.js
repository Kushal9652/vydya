import { Outlet } from 'react-router';
import './App.css';

import Navbar from './Components/Navbar';
import Vydyafooter from './Components/Vydyafooter';

// import FooterNav from './Components/Footer';

function App() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div className='h-auto w-screen relative top-[4rem]'>
          <Outlet />
        </div>
       <div className='relative top-[4rem]'>
       <Vydyafooter/>
       </div>
      </div>
    </>
  );
}

export default App;
