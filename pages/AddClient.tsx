import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClients } from '../context/ClientContext';

const AddClient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('Active');
  
    const navigate = useNavigate();
    const { addClient } = useClients();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addClient({ name, email, phone, status });
  
      setName('');
      setEmail('');
      setPhone('');
      setStatus('Active');
  
      navigate('/clients');
    };
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-200 focus:outline-none"
          >
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
