import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { signIn, signUp } from '../services/auth';

function UseAuthForm() {
  const location = useLocation();
  const history = useHistory();
  const { email, password, setErrorMessage } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password });

      const url = location.state?.from ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ email, password });

      const url = location.state?.from ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return { email, password, handleSubmit, handleSignUpSubmit };
}

export default UseAuthForm;
