import React from 'react';
let ExercisesData = [
    {
        "username": "user1",
        "description": "cycling",
        "duration": 80,
        "date": "2023-12-07 06:55:02"
    },
    {
        "username": "use2",
        "description": "running",
        "duration": 60,
        "date": "2023-12-07 06:55:02"
    },
    {
        "username": "use3",
        "description": "running",
        "duration": 60,
        "date": "2023-12-07 06:55:02"
    }
]
const  Exercises = ()=>{
    return (
       <div>
      <div className='container-fluid' style={{ width: '80%', alignItems: 'center' }}>
         <table className='table'>
                    <thead style={{ alignContent: 'center' }} >
                        <tr>
                            <th>
                                Username
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Duration
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {ExercisesData.map(ele => {
                            return <tr key={ele.username}>
                                <td>
                                    {ele.username}
                                </td>
                                <td>
                                    {ele.description}
                                </td>
                                <td>
                                    {ele.duration}
                                </td>
                                <td>
                                    {ele.date}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
         </div>
       </div>
    )
}
export default Exercises