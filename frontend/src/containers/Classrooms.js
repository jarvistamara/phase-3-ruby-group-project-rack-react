import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Classrooms = () => {
    const [classroom, setClassroom] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/classroom/')
        .then(res => res.json())
        .then(data =>
            setClassroom(data))
    }, [])






    return (
        <div>
            <h1>View All Our Classrooms</h1>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}
export default Classrooms