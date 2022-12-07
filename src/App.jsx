import { Route,BrowserRouter} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      
    </div>
  );
}

export default App;
