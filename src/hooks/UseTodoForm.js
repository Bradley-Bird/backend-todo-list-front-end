import React from 'react';
import { useTodoContext } from '../context/TodoContext';

function UseTodoForm() {
  const { todo, setErrorMessage } = useTodoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  return { handleSubmit };
}

export default UseTodoForm;
