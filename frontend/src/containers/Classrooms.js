import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/image1.jpg'
import Classroom from './Classroom'


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
        <li key={c.id} classname="classlist-li">
            {c.teacher_name}  -  {c.title}
            </li>
            </Link>)

    return (
        <div>
            <h1>Current Classrooms</h1>
            <img src={image1} alt="Kindergarden class"/>
            <p>Click one a Class below to view Class details and Students.</p>
            <ol className='classlist-li'>
               <h2>{classroomsList}</h2> 
            </ol>
        </div>
    )
}
export default Classrooms