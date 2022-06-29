import React, { useState } from 'react';
import { getUser } from '../services/auth';
function Main() {
  const [user, setUser] = useState('');
  const handleClick = async () => {
    const resp = await getUser();
    setUser(resp);
    console.log(resp);
  };
  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleClick}>user</button>
    </div>
  );
}

export default Main;
