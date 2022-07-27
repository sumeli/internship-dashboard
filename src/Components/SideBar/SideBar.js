import React from 'react'
import './sidebar.css'
import Card from 'react-bootstrap/Card';

const SideBar = () => {
    return (
        <div className='sidebar'>
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
    )
}

export default SideBar