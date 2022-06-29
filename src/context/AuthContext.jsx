import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (data === undefined) {
    throw new Error('Auth Context must be in a provider ');
  }
  return data;
};

export { AuthProvider, useAuthContext, AuthContext };
