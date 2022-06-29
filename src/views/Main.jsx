import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signOut } from '../services/auth';
import { useTodoContext } from '../context/TodoContext';
import UseTodoForm from '../hooks/UseTodoForm';
import UseTodoList from '../hooks/UseTodoList';
function Main() {
  const { setTodo, errorMessage, loading, checked } = useTodoContext();
  const { todo, handleSubmit } = UseTodoForm();
  const { list, handleChange, reloadList } = UseTodoList();
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
              onClick={reloadList}
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
      <Container component="section" maxWidth="lg">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Todo</TableCell>
              <TableCell>Done</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.todo}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={item.done}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}

export default Main;
