import React, {useState} from 'react'
import StudentEditForm from '../containers/StudentEditForm'

const Student = (props) => {
    const [studentEdit, setStudentEdit] = useState(false)




    return (
        <div>
            <div className='student-list'>
            {props.student.first_name} {props.student.last_name}
            </div>
            
            {studentEdit ? <StudentEditForm  student={props.student} editStudent={props.editAStudent} formToggle={()=> setStudentEdit(false)}/> : <button onClick={() => setStudentEdit(true)}>Edit</button>}
            <button onClick={ () => props.deleteAStudent(props.student.id)}>Delete</button>
            <br/>
            <br/>
        </div>
    )
}
export default Student
