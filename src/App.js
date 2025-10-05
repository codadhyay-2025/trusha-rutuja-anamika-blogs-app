import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import CreateNewPost from './Components/CreateNewPost/CreateNewPost';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='backgroundImage'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs/:id?' element={<Blogs />} />
          <Route path='/createnewpost/:id?' element={<CreateNewPost />} />
        </Routes>
      </Router>


    </div>

  );
}

export default App;

