export const addTodo = async ({ todo }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/todo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ todo }),
  });
  if (!resp.ok) throw new Error('Todo must not be empty');
  return resp.json();
};

export const getTodoList = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/todo`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  if (!resp.ok) throw new Error('You must be signed in to view your todo-list');
  return resp.json();
};
export const updateTodoStatusById = async (id, attrs) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/todo/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(attrs),
  });
  return resp.json();
};
