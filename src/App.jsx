import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Home from './components/pages/home';
import Navbar from './layout/navbar';
import AddUserNew from './components/user/addusernew';
import EditUser from './components/user/edituser';
import Viewuser from './components/user/viewuser';
import Pagenotfound from './components/pages/pagenotfound';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

function App() {
    return ( <Router><div className='container'>
  <Navbar /> <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/user/add" element={<AddUserNew />} />
    <Route exact path="/users/edit/:userId" element={<EditUser />} />
    <Route exact path="/users/view/:userId" element={<Viewuser />} />
    <Route path='*' element={<Pagenotfound />} />
      
      </Routes>
       </div></Router>
    
    );
}

export default App;