import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, errorMessage, setErrorMessage }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const data = useContext(TodoContext);
  if (data === undefined) {
    throw new Error('Todo Context must be wrapped in a provider');
  }
  return data;
};

export { TodoContext, TodoProvider, useTodoContext };
