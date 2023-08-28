import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-blue-300 md:w-2/12">
      <h1 className="text-2xl font-bold text-center text-white mt-10">
        JAHtv Clients Admin
      </h1>
      <nav className="mt-5 ml-5">
        <Link
          to="/"
          className={`${
            location.pathname === '/' ? 'text-blue-400' : 'text-white'
          } text-xl  mt-2 block hover:text-blue-400`}
        >
          Clients
        </Link>
        <Link
          to="/clients/new-client"
          className={`${
            location.pathname === '/clients/new-client'
              ? 'text-blue-400'
              : 'text-white'
          } text-xl  mt-2 block hover:text-blue-400`}
        >
          New Client
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
