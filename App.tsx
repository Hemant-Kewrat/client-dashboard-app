import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AddClient from './pages/AddClient';
import { ClientProvider } from './context/ClientContext';
import EditClient from './pages/EditClient';
import Register from './pages/Register';
import ClientDetails from './pages/ClientDetails';
import Home from './pages/Home';


function App() {
  return (
    <AuthProvider>
  <ClientProvider>
    <Routes>
      {/* Public Routes */}
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/add" element={<AddClient />} />
          <Route path="clients/edit/:id" element={<EditClient />} />
          <Route path="clients/:id" element={<ClientDetails />} />

        </Route>
      </Route>
    </Routes>
  </ClientProvider>
</AuthProvider>

  );
}

export default App;
