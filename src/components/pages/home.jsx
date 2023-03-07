import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import {Table , Button} from 'react-bootstrap';

function Home() {

  const [users,setUsers]=useState([])
  const deleteUser = async(userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getAllUsers();
  }
  useEffect(() => {
   getAllUsers();
  //  getAllUsersWithAwait();
  }, []);
  
  // const getAllUsersWithAwait= function async() {
  //   const results = await axios.get("http://localhost:5000/users");
  //   console.log(results);
  //   console.log("After Axios Api Call")
  // }
  function getAllUsers() {
    axios.get("http://localhost:5000/users")
    .then( function response(response) {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch(function error(error) {
      console.log(error)
    }
    ) ;console.log("After axios Api Call");
  }
  return (
   <div className='py-3 m-3  shadow position-fixed top-9 start-0 w-100 h-100 bg-$blue-300'>
<h2>User Managment System</h2>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{ users.map((user,index) =>(
        <tr>
          <td>{index}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td key={99}><Link  to={`/users/view/${user.id}`} className="btn btn-info me-2">View</Link></td>
          <Link to= {`/users/edit/${user.id}`} className="btn btn-primary">Edit</Link>
            <Button variant="btn btn-primary" onClick={() => deleteUser(user.id)}>Delete</Button>
        </tr>
      ))}
      </tbody>
    </Table>

    </div>
  )
}

export default Home;
