import React from 'react'
import { NavLink } from 'react-router-dom'

const Oepage = () => {
    return (
        <>
            <div className='sidebar col-3 ' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                <h4 style={{ fontWeight: 'bold' }}>Operational Executive</h4>

                {/* <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

                <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink> */}

                <NavLink to='/oelist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Operational Exicutive Enquery List</NavLink>

                <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

            </div>

        </>
    )
}

export default Oepage