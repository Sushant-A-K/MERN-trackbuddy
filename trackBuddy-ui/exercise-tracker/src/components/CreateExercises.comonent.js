import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addExercise, getUsers } from './services/api';


const  CreateExercises = ()=>{
    console.log(getUsers(),"logginexercises");
     const [usersData,setUserData] = useState()
     const [description, setDescription] = useState('')
     const [duration, setDuration] = useState(0)
     const [date, setDate] = useState(new Date())
     const [username,setUserName] = useState();

    useEffect(()=>{
        getUsers()
        .then(data=>setUserData(data))
        .catch(err=>console.log(err))
    },[])

    const handleDescription = (data) => {
        setDescription(data)
    }
    const handleDropdown = (data) =>{
        setUserName(data)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let exercise = {
            username: username,
            description:description,
            duration: duration,
            date:date
        }
        const results = await addExercise(exercise)
        console.log(results,"submit result");
    }

    return (
       <div className='container' style={{ width: '40%' }}>
        <h3>Create Exercises</h3>
        <br/>
        <form styles={{flex:1}} onSubmit={(e)=>handleSubmit(e)}>
            <div className='form-group'>
                <div>
                <label>Username</label><br/>
                {console.log(usersData,"usersData")}
                <select
                value={username}
                onChange={e=>{handleDropdown(e.target.value)}}
                selected
                >
                    <option>select User</option>
                    {usersData && usersData.map(ele=><option>{ele.username}</option>)

                    }
                </select>
                </div>
                <br/>
                <div>
                    <label>Description</label>
                    <input type="input"
                     className='form-control'
                     value={description}
                     onChange={(e)=>handleDescription(e.target.value)}
                     style={{width:'300px'}}
                     />
                     
                </div>
                <br/>
                <div>
                    <label>Duration</label>
                    <input type='text'
                        required
                        className='form-control'
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />                </div>
                <br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
       </div>
    )
}


export default CreateExercises
