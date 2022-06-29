import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        errorMessage,
        setErrorMessage,
        list,
        setList,
        loading,
        setLoading,
        checked,
        setChecked,
      }}
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
