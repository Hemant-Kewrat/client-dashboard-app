import { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem('user');
  });
  

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('opticrm_users') || '[]');
    const found = users.find((user: any) => user.email === email && user.password === password);

    if (found) {
      setUser(email);
      localStorage.setItem('user', email);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
