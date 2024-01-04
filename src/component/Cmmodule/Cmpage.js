import React from 'react'
import { NavLink } from 'react-router-dom'

const Cmpage = () => {
    return (
        <>

            <div className='sidebar col-3 ' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                <h4 style={{ fontWeight: 'bold' }}>Credit Manager Executive</h4>

                {/* <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

                    <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink> */}

                <NavLink to='/cmlist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Credit Manager Exicutive List</NavLink>

                <NavLink to='/cmlogout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

            </div>

        </>
    )
}

export default Cmpage