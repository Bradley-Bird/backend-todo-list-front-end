export const signIn = async ({ email, password }) => {
  const resp = await fetch(`http://localhost:7890/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid password or email');

  return resp.json();
};
