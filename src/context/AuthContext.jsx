import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = getUser();
  const [currentUser, setcurrentUser] = useState(user || { email: null });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        setErrorMessage,
        currentUser,
        setcurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error('Auth Context must be wrapped in a provider ');
  }
  return data;
};

export { AuthProvider, useAuthContext, AuthContext };
