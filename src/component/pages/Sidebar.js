import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css files/pages css/sidebar.css'

const Sidebar = () => {

  
  return (
    <>
    <div className='sidebar col-3 ' style={{backgroundColor:'white', backgroundSize:'cover'}}>

    <h4  style={{fontWeight:'bold'}}>Regional Executive</h4>

    <NavLink to='/enquery' className='ii ' style={{fontWeight:'bold',fontSize:'20px'}}>Enquery</NavLink>

    <NavLink to='/enquerylist' className='ii ' style={{fontWeight:'bold',fontSize:'20px'}}>Enquery List</NavLink>

    <NavLink to='/cibilstatus' className='ii ' style={{fontWeight:'bold',fontSize:'20px'}}>Cibil Status</NavLink>

    <NavLink to='/logout ' className='ii ' style={{fontWeight:'bold',fontSize:'20px'}}>Log Out</NavLink>

    </div>

    </>
  )
}

export default Sidebar