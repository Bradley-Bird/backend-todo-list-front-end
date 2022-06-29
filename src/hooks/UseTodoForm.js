import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { addTodo } from '../services/todo';

function UseTodoForm() {
  const { todo, setErrorMessage } = useTodoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ todo });
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  return { handleSubmit };
}

export default UseTodoForm;
