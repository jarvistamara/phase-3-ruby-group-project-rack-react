import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const Classrooms = () => {
    const [classrooms, setClassrooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/classrooms')
        .then(res => res.json())
        .then(data =>
            setClassrooms(data))
    }, [])


    const classroomsList = classrooms.map(c => 
    <Link to={`/classrooms/${c.id}`}>
        <li key={c.id}>
            {c.title}
            </li>
            </Link>)



    return (
        <div>
            <h1>Current Classrooms</h1>
            <ul className='classroom-list'>
                {classroomsList}
            </ul>
        </div>
    )
}
export default Classrooms