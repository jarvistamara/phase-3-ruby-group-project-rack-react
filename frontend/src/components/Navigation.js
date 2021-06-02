import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" className="costumize">
                <Navbar.Brand href="/">MAKE-BELIEVE DAYCARE MANAGEMENT</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/classrooms">Classrooms</Nav.Link>
                    <Nav.Link href="/classrooms/new">Assign A New Student</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Navigation