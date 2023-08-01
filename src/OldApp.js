
import './App.css';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import  axios  from 'axios';
import Home from './Home';
import Function from './Function';



function App() {
  
const [text,setText] = useState('This is varible of react');
const [count,setCount] = useState(0);
const [user,setUser] = useState([]);


//via axios
const fetchData = () => {
  return axios.get("http://127.0.0.1:8000/api/users")
  .then((response) => setUser(response.data['users']));
} 

//via fetch method
/*
const fetchData = () => {
  return fetch("http://127.0.0.1:8000/api/users")
  .then((response) => response.json())
  .then((data) => setUser(data['users']));
} */

useEffect(() => {
  fetchData();
}, []);
  return (
    <div className="App">
      <Function/>
      <Home/>
      <h1>WelCome To React</h1>
      <span>{text}</span>
      <button>Simple Button</button>
      <Button>Buttostrap Button</Button>
      <p>Your Click {count} times</p>
      <button onClick={()=> setCount(count + 1)}>
        Click Mee
      </button>

      <h1>User List</h1>
      <ul>
          {user && user.length>0 && user.map((userObj, index) => (
           <li key={userObj.id}>{userObj.name} - {userObj.email}</li>
          ))}
            
      </ul>
    </div>
  );
}

export default App;
