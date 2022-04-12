import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Router from './pages/Router'

function App() {

const theme = createTheme({
  status: {
    danger: green[500],
  },
});

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
      <Router />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
