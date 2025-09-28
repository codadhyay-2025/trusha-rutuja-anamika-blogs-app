import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Dashboard/Header/Header';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </Router>
      {/* <Dashboard /> */}
      {/* <Register/> */}
      {/* <Login/> */}


    </div>

  );
}

export default App;

