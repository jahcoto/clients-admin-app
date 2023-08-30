import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="md:flex md:flex-col md:min-h-screen">
      <Header />
      <div className="md:flex md:flex-row md:min-h-screen">
        <Sidebar />
        <main className="md:w-10/12 px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
