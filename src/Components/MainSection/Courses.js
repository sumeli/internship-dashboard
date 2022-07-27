import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './mainsection.css'
import ProgressBar from '../ProgressBar/ProgressBar';
import { CourseData } from './CourseData';

const Courses = () => {
    const data = CourseData;
    console.log(data)

    return (
        <div className='courses-cards'>
            <Container>
                <Row>
                    {data.map((course) => {
                        return (
                            <Col>
                                <Card style={{ backgroundColor: `${course.bgcolor}` }}>
                                    <Card.Body>
                                        <Card.Text>
                                          <ProgressBar prog={course.progData} />
                                        </Card.Text>
                                        <Card.Title style={{color: "#2C3333"}}>{course.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{course.subtitle}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}
export default Courses