import React, { Component } from 'react'

class StudentForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        age: 0
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
        this.props.addAStudent(this.state)
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
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default StudentForm