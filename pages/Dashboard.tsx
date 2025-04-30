import { useClients } from '../context/ClientContext';
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const { clients } = useClients();

  const total = clients.length;
  const active = clients.filter((c) => c.status === 'Active').length;
  const inactive = clients.filter((c) => c.status === 'Inactive').length;
  const pending = clients.filter((c) => c.status === 'Pending').length;

  const statusData = [
    { name: 'Active', value: active },
    { name: 'Inactive', value: inactive },
    { name: 'Pending', value: pending },
  ];

  const COLORS = ['#34d399', '#f87171', '#fbbf24'];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">📊 Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-indigo-400">
          <h3 className="text-xl font-medium text-gray-600">Total Clients</h3>
          <p className="text-3xl font-bold text-indigo-600">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-green-400">
          <h3 className="text-xl font-medium text-gray-600">Active</h3>
          <p className="text-3xl font-bold text-green-600">{active}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-red-400">
          <h3 className="text-xl font-medium text-gray-600">Inactive</h3>
          <p className="text-3xl font-bold text-red-600">{inactive}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border-t-4 border-yellow-400">
          <h3 className="text-xl font-medium text-gray-600">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">{pending}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-center mb-4 text-indigo-600">Client Status Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statusData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold text-center mb-4 text-indigo-600">Client Status Overview</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
