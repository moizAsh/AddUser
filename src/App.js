import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add" element={<AddUser/>}/>
          <Route exact path="/edit/:id" element={<EditUser/>}/>
         
        </Routes>      
    </Router>
      
    </div>
  );
}

export default App;
