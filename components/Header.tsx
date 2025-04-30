import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
         <Link to="/home" className="text-sm text-indigo-600 hover:underline">
          Home
        </Link>
        <span className="text-gray-600 hidden sm:inline">Hemant</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <button
          onClick={logout}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
