import React, { useState } from 'react';
import axios from 'axios' ;
import { useNavigate as navigate } from 'react-router-dom';

const Adduser = () => { 

const initialState  ={name :" ",username:" " , email:"",phone:" ",website:" "}

const [user,setUser] =useState(initialState)
  const { name, username, email, phone, website } = user; //object destructuring
const onchangeInput = event => {
setUser({...user,[event.target.name]:event.target.value})

}
 const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!user.name) {
            alert("Name cannot be empty");
            return;
        }
        if (!user.username) {
            alert("Username cannot be empty");
            return;
        }
        if (!user.email) {
            alert("Email cannot be empty");
            return;
        }
        if (!user.phone) {
            alert("Phone cannot be empty");
            return;
        }
  await axios.post("http://localhost:5000/users", user);
        navigate({ pathname: '/' });

    }
    return (
        <div className="container">
            <div className="w-75 mx-auto p-3 shadow">
                <h2 className="text-center mb-3">Add User</h2>
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <div className="form-group mb-2">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter your full name" name="name" value={name} onChange={(event) => onchangeInput(event)}/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter your username" name="username" value={username} onChange={(event) => onchangeInput(event)}/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control form-control-lg" placeholder="Enter your email" name="email" value={email} onChange={(event) => onchangeInput(event)} />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={phone}
                            onChange={(event) => onchangeInput(event)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter your website" name="website" value={website} onChange={(event) => onchangeInput(event)}/>
                    </div>

                    <button type="submit" className="btn btn-info text-white col-12">Add user</button>
                </form>
            </div>
        </div>
)
}

export default Adduser;
