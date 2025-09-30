import logo from './logo.svg';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Dashboard/Header/Header';
// import Register from './Component/Register/Register';
// import Blogs from './Components/Blogs/Blogs';
import Blogs from './Components/Dashboard/Blogs/Blogs';
import CreateNewPost from './Components/CreateNewPost/CreateNewPost';
function App() {
  return (
    <div>
      <Header />
      {/* <Dashboard /> */}
      {/* <Register/> */}
      <Blogs/>
      {/* <CreateNewPost/> */}
    </div>

  );
}

export default App;
