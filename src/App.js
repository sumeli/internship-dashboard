import React from 'react'
import './App.css'
import MainSection from './Components/MainSection/MainSection'
import SideBar from './Components/SideBar/SideBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBarPhone from './Components/SidebarPhone/SideBarPhone';

const App = () => {
  return (
    <div className='app'>
      <Container>
        <Row>
          <Col sm={3}>
            <SideBar />
            <SideBarPhone />
          </Col>
          <Col sm={9}> 
            <MainSection />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App