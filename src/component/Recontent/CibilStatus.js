import React, { useEffect, useState } from 'react'
//import Sidebar from '../pages/Sidebar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const CibilStatus = () => {


  const[user,setuser]=useState([])

  async function fetchdata(){
    const  result = await
    axios.get(` http://localhost:8090/cibil`)
    setuser(result.data)
    console.log(result.data)
    
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (

    <div className='b1'>
      <div className='si'>
        <div className='sidebar  col-auto i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

          <h4 style={{ fontWeight: 'bold' }} className=''>Regional Executive</h4>

          <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

          <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink>

          <NavLink to='/cibilstatus' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Cibil Status</NavLink>

          <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

        </div>
      </div>

      {/* <Sidebar/> */}

      <div className='b2'>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"class="table-primary">ID</th>
              <th scope="col"class="table-light">CIBILSCORE</th>
              <th scope="col"class="table-primary">DATE</th>
              <th scope="col"class="table-light">STATUS</th>
              <th scope="col"class="table-primary">REMARK</th>
              <th scope="col"class="table-light">REGISTRATION</th>
              <th scope="col"class="table-primary">UPLOAD DOCUMENTS</th>
              <th scope="col"class="table-light">DELETE</th>
            </tr>
          </thead>
          <tbody>
           {
            user.map((use)=>{
              return(
                <tr key={use.eid}>
                <td class="table-primary">{use.eid}</td>
                <td class="table-light">{use.cscore}</td>
                <td class="table-primary">{use.csdate}</td>
                <td class="table-light">{use.status}</td>
                <td class="table-primary">{use.remark}</td>
                <td class="table-light">
                  <NavLink to={'/registration'}><button type='submit' className='btn btn-danger'>Registration</button></NavLink>
                </td>
                <td class="table-primary">
                <NavLink to={'/'}><button type='submit' className='btn btn-danger'>Upload documents</button></NavLink>
                </td>
                <td class="table-light">
                <NavLink to={`/cibildelete/${use.eid}`}><button type='delete' className='btn btn-danger'>DELETE</button></NavLink>
                </td>
              </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CibilStatus