import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signOut } from '../services/auth';
import { useTodoContext } from '../context/TodoContext';
import UseTodoForm from '../hooks/UseTodoForm';
function Main() {
  const { setTodo, errorMessage } = useTodoContext();
  const { todo, handleSubmit } = UseTodoForm();
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
    <>
      <div>
        <p>{user.email}</p>
        <button onClick={handleClick}>user</button>
        <button onClick={handleLogout}>logout</button>
      </div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Todo
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="todo"
              label="What do you need to do today?"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {' '}
              Lets get it done!
            </Button>
            <Typography color={'error'} variant="subtitle2">
              {errorMessage}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Main;
