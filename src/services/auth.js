export const signUp = async ({ email, password }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error('Invalid password or email');

  return resp.json();
};

export const signIn = async ({ email, password }) => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  if (!resp.ok) throw new Error('Invalid password or email');

  return resp.json();
};

export const getUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });

    return res.json();
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

export const signOut = async () => {
  try {
    await fetch(`http://localhost:7890/api/v1/users/sessions`),
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
      };
  } catch (e) {}
};
