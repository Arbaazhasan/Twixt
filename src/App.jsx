import './App.css';
import Background from './components/background/Background';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

  return (
    <div className='app'>
      <Background />
      <Home />
      {/* <Login /> */}

    </div>
  );
}

export default App;
