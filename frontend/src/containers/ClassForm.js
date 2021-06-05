import React, { Component } from 'react'

class ClassForm extends Component {
    state = {
        title: '',
        teacher_name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTeacherChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addANewClassroom(this.state)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Class Title: </label> <br/>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <label>Teacher's Name: </label> <br/>
                    <input type='text' name='teacher_name' value={this.state.teacher_name} onChange={this.handleTeacherChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default ClassForm