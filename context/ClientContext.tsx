import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type ClientType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
};

type ClientContextType = {
  clients: ClientType[];
  addClient: (client: Omit<ClientType, 'id'>) => void;
  deleteClient: (id: number) => void;
  updateClient: (updated: ClientType) => void;
};

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<ClientType[]>([]);

  // Load clients from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('clients');
    if (stored) {
      setClients(JSON.parse(stored));
    }
  }, []);

  const addClient = (client: Omit<ClientType, 'id'>) => {
    const newClient = { ...client, id: Date.now() };
    const updated = [...clients, newClient];
    setClients(updated);
    localStorage.setItem('clients', JSON.stringify(updated));
  };

  const deleteClient = (id: number) => {
    const updatedClients = clients.filter((client) => client.id !== id);
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  const updateClient = (updated: ClientType) => {
    const updatedClients = clients.map((client) =>
      client.id === updated.id ? updated : client
    );
    setClients(updatedClients);
    localStorage.setItem('clients', JSON.stringify(updatedClients));
  };

  return (
    <ClientContext.Provider
      value={{ clients, addClient, deleteClient, updateClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClients must be used within ClientProvider');
  }
  return context;
};
