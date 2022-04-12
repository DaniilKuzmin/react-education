import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Router from './pages/Router';
import React from 'react';
import { useState } from 'react';

export const MyCounterContext = React.createContext({ counter: 0})
export const DataContext = React.createContext({message: ["hello work"]});

function App() {

const [counter, setCounter] = useState(Number());

function withLogger(fn){
  return function(...args){
    console.log({ args }); // [1, 2]
    return fn(...args); // ...[1, 2] => 1, 2
  }
}

const foo = (a, b) => a + b;
const bar = withLogger(foo);
console.log('bar:', bar(1, 2))

const theme = createTheme({
  status: {
    danger: green[500],
  },
});

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
      <MyCounterContext.Provider value={{ counter: counter, setCounter: setCounter }} > 
        <Router />
      </MyCounterContext.Provider>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
