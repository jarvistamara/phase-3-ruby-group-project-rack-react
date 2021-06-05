import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/image1.jpg'
import ClassForm from './ClassForm'


const Classrooms = () => {
    const [classrooms, setClassrooms] = useState([])
    const [classForm, setClassForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/classrooms')
        .then(res => res.json())
        .then(data =>
            setClassrooms(data))
            console.log(classrooms)
    }, [])

    const classroomsList = classrooms.map(c => 
    <Link to={`/classrooms/${c.id}`}>
        <li key={c.id}>
            {c.teacher_name}  -  {c.title}
            </li>
            </Link>)

    const changeFormState = (e) => {
        console.log(e.target)
        setClassForm(true)
    }

    const addNewClassroom = (classroom) => {
       const headerConfig = {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(classroom)
        }
        fetch('http://localhost:9292/classrooms', headerConfig)
        .then(res => res.json())
        .then(data => {
            setClassrooms([...classrooms, data])
        })
        setClassForm(false)
    }

    return (
        <div>
            <h1>Current Classrooms</h1>
            <img src={image1} alt="Kindergarden class"/>
            <br/>
            <br />
            {classForm ? <ClassForm addANewClassroom={addNewClassroom}/> : <button onClick={changeFormState}>Add New Classroom</button>}
            <br />
            <br />
            <p>Click one a Class below to view Class details and Students.</p>
            <ol className='classlist-li'>
               <h4>{classroomsList}</h4> 
            </ol>
            
        </div>
    )
}
export default Classrooms