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
