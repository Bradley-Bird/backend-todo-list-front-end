import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signOut } from '../services/auth';
function Main() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const handleClick = async () => {
    const resp = await getUser();
    setUser(resp);
    console.log(resp);
  };
  const handleLogout = async () => {
    await signOut();
    history.push('/auth/signIn');
  };
  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleClick}>user</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Main;
