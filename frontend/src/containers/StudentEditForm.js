import React, { Component } from 'react'

class StudentEditForm extends Component {
    state = {
        id: null,
        first_name: '',
        last_name: '',
        age: 0
    }

    componentDidMount(){
        this.setState({
            id: this.props.student.id,
            first_name: this.props.student.first_name,
            last_name: this.props.student.last_name,
            age: this.props.student.age
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleStudentChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleAgeChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editStudent(this.state)
        this.props.formToggle()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name: </label> <br/>
                    <input type='text' name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                    <br/>
                    <label>Last Name: </label> <br/>
                    <input type='text' name='last_name' value={this.state.last_name} onChange={this.handleStudentChange} />
                    <br/>
                    <label>Age: </label> <br/>
                    <input type='number' name='age' value={this.state.age} onChange={this.handleAgeChange} />
                    <br/>
                    <br/>
                    <input type='submit' />
                    <br/>
                </form>
            </div>
        )
    }
}
export default StudentEditForm