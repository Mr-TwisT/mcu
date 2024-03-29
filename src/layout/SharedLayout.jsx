import { Outlet } from 'react-router-dom';
import Navbar from '../sections/Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
