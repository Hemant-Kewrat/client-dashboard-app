import { useNavigate, useParams } from 'react-router-dom';
import { useClients } from '../context/ClientContext';
import { useEffect, useState } from 'react';

const EditClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateClient } = useClients();

  const [client, setClient] = useState<any>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Active');

  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients') || '[]');
    const found = storedClients.find((c: any) => c.id.toString() === id);
    if (found) {
      setClient(found);
      setName(found.name);
      setEmail(found.email);
      setPhone(found.phone);
      setStatus(found.status);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateClient({
      id: Number(id),
      name,
      email,
      phone,
      status,
    });

    navigate('/clients');
  };

  if (!client) {
    return <div className="text-red-500">Client not found or still loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Edit Client</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditClient;
