import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Body() {
  return (
    <div id='body'>
      <div className="container">
        <div className="container sticky-top p-0">
          <Navbar />
        </div>
        <div className="my-5">
          <Outlet />
        </div>
        <div className="container p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
