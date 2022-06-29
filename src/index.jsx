import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material';
import { TodoProvider } from './context/TodoContext';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00263a',
      light: '#E7ECF2',
    },
    secondary: {
      main: '#7fbc03',
    },
    background: { default: '#E7ECF2' },
  },
});

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TodoProvider>
          <Router>
            <App />
          </Router>
        </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
