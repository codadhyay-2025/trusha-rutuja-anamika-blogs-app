import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Dashboard/Header/Header';
import Register from './Component/Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Register/>
    </div>

  );
}

export default App;
