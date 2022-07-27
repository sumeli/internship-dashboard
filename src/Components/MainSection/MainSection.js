import React from 'react'
import './mainsection.css'
import { FcFilledFilter } from 'react-icons/fc';
import Courses from './Courses';
import Domain from '../DomainSection/Domain';

const MainSection = () => {
  return (
    <div className='mainSection'>
        <div className='search'>
          <input type="text" placeholder="🔍 Search course, student, reviews, etc"></input>
          <button><FcFilledFilter /> Filters</button>
        </div>

        <div className='courses'>
          <h3>Course Progress</h3>
          <Courses />
          <Domain />
        </div>
    </div>
  )
}

export default MainSection