import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
// import FooterNav from './Components/Footer';

function App() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div className='h-auto w-screen relative top-[4rem]'>
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default App;
