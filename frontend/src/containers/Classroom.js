import React, {useEffect, useState} from 'react'
import Student from '../components/Student'
import StudentForm from './StudentForm'


const Classroom = (props) => {
    const [classroom, setClassroom] = useState({students: []})
    const [studentForm, setStudentForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/classrooms/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
           // console.log(data)
            setClassroom(data)
        })
    }, [props.match.params.id])

    const addStudent = (student) => {
        console.log(student)
        const headerConfig = { method: 'POST',  headers: {'Content-Type': 'application/json'},  body: JSON.stringify(student) }
        fetch(`http://localhost:9292/classrooms/${classroom.id}/students`, headerConfig)
        .then(res => res.json())
        .then(data => { 
            setClassroom({
                ...classroom, 
                students: [...classroom.students, data]}) })
        setStudentForm(false)
        console.log(student)
    }
    
    const deleteStudent = (id) => {
        const headerConfig = { method: 'DELETE',  headers: {'Content-Type': 'application/json'} }
        fetch(`http://localhost:9292/classrooms/${classroom.id}/students/${id}`, headerConfig)
        .then((data) => {
            const updatedStudents = classroom.students.map(s => s.id === id ? data : s)
            setClassroom({
                ...classroom,
                students: updatedStudents
            })
            refreshPage()
        })
    }

    function refreshPage() {
        window.location.reload(false);
      } 


    const editStudent = (student) => {
        const headerConfig = { method: 'PATCH',  headers: {'Content-Type': 'application/json', "Accept": "application/json"},  body: JSON.stringify(student) }
        fetch(`http://localhost:9292/classrooms/${classroom.id}/students/${student.id}`, headerConfig)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // // const updatedStudents = classroom.students.filter(s => s.id !==id)
            const updatedStudents = classroom.students.map(s => s === data ? data : s)
            setClassroom({
                ...classroom,
                students: updatedStudents
            })
           refreshPage()
        })
    }

    const changeFormState = (e) => {
       // console.log(e.target)
        setStudentForm(true)
    }

    const students = classroom.students.map(s => <Student key={s.id} editAStudent={editStudent} deleteAStudent={deleteStudent} student={s}/>)
    
    return (
        <div>
            <h1>{classroom.title}</h1>
            <h2>{classroom.teacher_name}</h2>
            <hr/>
            <h3>Students:</h3>
            <br/>
            {students}
            <br/>
            <br/>
            {studentForm ? <StudentForm addAStudent={addStudent} classroom={classroom}/> : <button onClick={changeFormState}>Add New Student</button>}
        </div>
    )
}
export default Classroom