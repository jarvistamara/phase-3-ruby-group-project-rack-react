import React from 'react'
import { Link } from 'react-router-dom'

const ClassroomLink = ({classroom}) => {
    return (
        <div>
            <Link to={`/classrooms/${classroom.id}`}>
            <li>{classroom.teacher_name}  -  {classroom.title}</li>
            </Link>
        </div>
    )
}
export default ClassroomLink