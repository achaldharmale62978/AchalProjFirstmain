import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css files/reconect css/logout.css'

const Oelogout = () => {



    function fetchdata() {
        axios.get(`http://localhost:8090/projdata`)
       
    }
    useEffect(() => {
        fetchdata()
    },[])
    return (
        <>

           <center>
           <div className='content'>
                {/* <NavLink to={'/login'}><button type='submit' className=''>LOG OUT</button></NavLink> */}
                <h2>You want to Logout</h2>
                <NavLink to={'/login'}><input type='submit' value='Yes' className='btn btn-outline-warning col-2'></input></NavLink>&ensp;
                <NavLink to={'/oelist'}><button type='reset' value='no' className='btn btn-outline-danger col-2'>No</button></NavLink>
            </div>
           </center>
            {/* </div> */}


        </>
    )
}

export default Oelogout