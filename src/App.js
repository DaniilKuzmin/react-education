import './App.css';
import Message from './Message';

const message = 'Casual massage';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App(props) {
  // Между function и return можно писать JavaScript

const showRed = getRandomInt(2);

  return (
    <div className="App" style={{ paddingTop: '25px'}}>
      <header className={`App-header ${showRed ? 'backgroundRed' : 'backgroundBlue'}`}>
          Hello, {props.name}
          <Message messageForMe={message}/>
      </header>
    </div>
  );
}

export default App;
