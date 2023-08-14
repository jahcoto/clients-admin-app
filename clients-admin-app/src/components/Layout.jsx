import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row w-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
