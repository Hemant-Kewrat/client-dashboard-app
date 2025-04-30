import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 text-lg font-bold text-blue-600">OptiCRM</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/clients" className="text-gray-700 hover:text-blue-500">Clients</Link>
       

      </nav>
    </aside>
  );
};

export default Sidebar;
