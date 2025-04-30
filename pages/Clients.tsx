import { useState } from 'react';
import { useClients } from '../context/ClientContext';
import { Link } from 'react-router-dom';

const Clients = () => {
  const { clients, deleteClient } = useClients();
  const [search, setSearch] = useState('');

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this client?');
    if (confirm) {
      deleteClient(id);
    }
  };
  

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Client Management</h2>
        <Link
          to="/clients/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add New Client
        </Link>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>


      {/* Clients Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">{client.name}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      client.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : client.status === 'Inactive'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    
                  <Link
                      to={`/clients/${client.id}`}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      View
                    </Link><Link
                      to={`/clients/edit/${client.id}`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Static Placeholder) */}
      <div className="flex justify-end mt-4">
        <button className="px-3 py-1 border rounded-l bg-white">Prev</button>
        <button className="px-3 py-1 border-t border-b bg-blue-500 text-white">1</button>
        <button className="px-3 py-1 border rounded-r bg-white">Next</button>
      </div>
    </div>
  );
};

export default Clients;
