import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { addTodo } from '../services/todo';
import UseTodoList from './UseTodoList';

function UseTodoForm() {
  const { setTodo, todo, setErrorMessage } = useTodoContext();
  const { reloadList } = UseTodoList();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ todo });
      await reloadList();
      setTodo('');
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  return { handleSubmit };
}

export default UseTodoForm;
