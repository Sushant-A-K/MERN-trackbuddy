import React, { useEffect, useState } from 'react';
import { addUsers } from './services/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CreateUsers = () => {
  const [usersData, setUserData] = useState();
  const [age, setAge] = useState();
  const [description, setDescription] = useState('');
  const [username, setUserName] = useState();

  useEffect(() => {
    addUsers()
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDescription = (data) => {
    setDescription(data);
  };

  const handleDropdown = (data) => {
    setUserName(data);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: username,
      age: age,
    };
    const results = await addUsers(user);
    console.log(results, 'submit result');
  };

  return (
    <div className="container" style={{ width: '40%' }}>
      <h3>Create Users</h3>
      <br />
      <form styles={{ flex: 1 }} onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <br />
          <div>
            <label>Username</label>
            <input
              type="input"
              className="form-control"
              value={username}
              onChange={(e) => handleDropdown(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="input"
              className="form-control"
              value={age}
              onChange={handleAgeChange}
              style={{ width: '300px' }}
            />
          </div>
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

       </div>
    )
}


export default CreateUsers