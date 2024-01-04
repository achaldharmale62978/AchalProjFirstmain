import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css files/reconect css/logout.css'

const Logout = () => {

    // const navigat = useNavigate()

    function fetchdata() {
        axios.get(`http://localhost:8090/projdata`)
      
    }
    useEffect(() => {
        fetchdata()
    },[])
    return (
        <>

            <center>
            {/* <div className='content'>
                {/* <NavLink to={'/login'}><button type='submit' className=''>LOG OUT</button></NavLink> 
                <h2>You want to Logout</h2>
                <NavLink to={'/login'}><input type='submit' value='Yes' className='btn btn-outline-warning col-2'></input></NavLink>&ensp;
                <NavLink to={'/sidebar'}><button type='reset' value='no' className='btn btn-outline-danger col-2'>No</button></NavLink>
            </div> */}

<div className='content '>
      {/* <Regional /> */}
      <div className="card ">
        <h5 className="card-header text-center "  >Regional Executive</h5>
        <div className="card-body">
          <h5 className="card-title text-center ">Are You sure You want to logout.</h5>

         <NavLink to="/login">
          <button type="submit" className="btn btn-primary offset col-2 ">Logout</button>
          </NavLink>

          <NavLink to="/sidebar">
            <button type="reset" className="btn btn-primary offset-2 col-2">Cancel</button>
          </NavLink>

        </div>

      </div>
    </div>
            </center>
         


        </>
    )
}

export default Logout