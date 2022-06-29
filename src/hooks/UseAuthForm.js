import { createResponseComposition } from 'msw';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { signIn } from '../services/auth';

function UseAuthForm() {
  const { email, password, setErrorMessage } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password });
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return { email, password, handleSubmit };
}

export default UseAuthForm;
