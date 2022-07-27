import React from 'react'
import './domain.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Domain = () => {
    return (
        <div className='domain'>
            <h3>Buy Your Domain</h3>
            <div className='domain-cards'>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Investment Plan 1</Card.Title>
                                    <Card.Text>
                                        $10
                                    </Card.Text>
                                </Card.Body>
                                <p className='desc'>
                                    Buy your domain name, website hosting and Email for your chosen domain, amount might vary depending on which hosting and email provider you choose.
                                </p>
                                <p className='text'>Get your domain</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Investment Plan 2</Card.Title>
                                    <Card.Text>
                                        $15
                                    </Card.Text>
                                </Card.Body>
                                <p className='desc'>
                                    Buy your domain name, website hosting and Email for your chosen domain, amount might vary depending on which hosting and email provider you choose.
                                </p>
                                <p className='text'>Get your domain</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Refer to a friend to earn</Card.Title>
                                    <Card.Text>
                                        $50
                                    </Card.Text>
                                </Card.Body>
                                <p className='desc'>
                                    You will get USD $50 for every referral of a like minded friend with entrepreneurial mindset who completes the course fulfilling all the necessary milestones.
                                </p>
                                <p className='text'>Refer to a friend</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Domain