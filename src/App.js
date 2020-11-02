import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateMessage} from './store/index';

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <button onClick={() => dispatch(updateMessage("You did it!"))}>Click to see a different message!</button>
      </header>
    </div>
  );
}

export default App;
