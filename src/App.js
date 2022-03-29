import './App.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App(props) {
  // Между function и return можно писать JavaScript

const showRed = getRandomInt(2);
const Message = () => {
   return <div>{props.message}</div>;
}

  return (
    <div className="App" style={{ paddingTop: '25px'}}>
      <header className={`App-header ${showRed ? 'backgroundRed' : 'backgroundBlue'}`}>
          Hello, {props.name}

          <Message />
      </header>
    </div>
  );
}

export default App;
