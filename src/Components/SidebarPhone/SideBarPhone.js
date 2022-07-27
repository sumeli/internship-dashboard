import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import '../SideBar/sidebar.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const SideBarPhone = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='sidebar-phone'>
            <Button style={{backgroundColor : "grey", border: "none" , marginLeft: "10px", marginTop: "10px"}} onClick={handleShow}>
                <GiHamburgerMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='phone-sidebar'>
                        <Card>
                            <Card.Img variant="top" src={require("../assets/Profile.jpg")} />
                            <Card.Body>
                                <Card.Title>Sumeli Debdas</Card.Title>
                                <Card.Text style={{ color: "grey" }}>
                                    Web Designer
                                </Card.Text>
                                <div className='dashboard'>
                                    <button>Dashobard</button>
                                </div>
                            </Card.Body>
                        </Card>

                        <div className='options'>
                            <ul>
                                <li>📚 Courses</li>
                                <li>🧑🏻‍🎓 Students</li>
                                <li>🗣️ Discussion</li>
                                <li>⭐ Reviews</li>
                                <li>⚙️ Settings</li>
                                <li>📤 Logout</li>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default SideBarPhone