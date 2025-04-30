import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ClientType } from '../context/ClientContext';

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<ClientType | null>(null);

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients') || '[]');
    const found = storedClients.find((c: ClientType) => c.id.toString() === id);
    if (found) {
      setClient(found);
    }
  }, [id]);

  if (!client) {
    return <div className="text-red-600">Client not found</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Client Profile</h2>

      <div>
        <span className="font-semibold text-gray-700">Full Name:</span>
        <p className="text-lg">{client.name}</p>
      </div>

      <div>
        <span className="font-semibold text-gray-700">Email:</span>
        <p className="text-lg">{client.email}</p>
      </div>

      <div>
        <span className="font-semibold text-gray-700">Phone:</span>
        <p className="text-lg">{client.phone}</p>
      </div>

      <div>
        <span className="font-semibold text-gray-700">Status:</span>
        <span
          className={`ml-2 inline-block px-3 py-1 text-sm rounded-full ${
            client.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : client.status === 'Inactive'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {client.status}
        </span>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          to="/clients"
          className="text-blue-600 underline text-sm hover:text-blue-800"
        >
          ← Back to Clients
        </Link>
        <Link
          to={`/clients/edit/${client.id}`}
          className="text-green-600 underline text-sm hover:text-green-800"
        >
          ✏️ Edit Client
        </Link>
      </div>
    </div>
  );
};

export default ClientDetails;
