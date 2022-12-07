import React, { useEffect } from 'react';
import { useTodoContext } from '../context/TodoContext';
import {
  deleteById,
  getTodoList,
  updateTodoStatusById,
} from '../services/todo';

function UseTodoList() {
  const {
    list,
    setList,
    setErrorMessage,
    setLoading,
    checked,
    setChecked,
    setTodo,
  } = useTodoContext();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const data = await getTodoList();
        setList(data);
        setLoading(false);
      } catch (e) {
        setErrorMessage(e.message);
      }
    };
    getData();
  }, []);

  const reloadList = async () => {
    const data = await getTodoList();
    setList(data);
    setLoading(false);
  };
  const handleChange = async (e, id) => {
    setChecked(!checked);
    await updateTodoStatusById(id, { done: checked });
    await reloadList();
  };
  const handleDelete = async (id) => {
    await deleteById(id);
    await reloadList();
  };
  return { list, handleChange, reloadList, handleDelete };
}

export default UseTodoList;
