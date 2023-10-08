import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css files/Oecss/oelist.css'

const OeList = () => {

    const [user, setuser] = useState([])

    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:8090/projdata`)
        setuser(result.data)
        console.log(result.data)

    }
    useEffect(() => {
        fetchdata()
    },[])


    return (
        <>

            <div className='b1'>

                <div className='ssi'>
                    <div className='sidebar  col-10 i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                        <h4 style={{ fontWeight: 'bold' }} className='si'>Operational Executive</h4>

                        <NavLink to='/oelist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Operational Exicutive <br /> Enquery List</NavLink>

                        <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>


                    </div>
                </div>

                <div className='b2 '>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col " className='id table-light'>#</th>
                                <th scope="col" className="table-primary">First Name</th>
                                <th scope="col" className="table-light">Last Name</th>
                                <th scope="col" className="table-primary">B-date</th>
                                <th scope="col" className="table-light">Gender</th>
                                <th scope="col" className="table-primary">City</th>
                                <th scope="col" className="table-light">Email</th>
                                <th scope="col" className="table-primary">Phone No.</th>
                                <th scope="col" className="table-light">Pan-Card</th>
                                <th scope="col" className="table-primary">AdharCard</th>
                                <th scope="col" className="table-light">Address</th>
                                <th scope="col" className="table-primary">Cibil</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(obj => {
                                    return (
                                        <tr key={obj.id}>
                                            <th scope="row"className="table-light">1</th>
                                            <td className="table-primary">{obj.fname}</td>
                                            <td className="table-light">{obj.lname}</td>
                                            <td className="table-primary">{obj.bday}</td>
                                            <td className="table-light">{obj.gender}</td>
                                            <td className="table-primary">{obj.city}</td>
                                            <td className="table-light">{obj.email}</td>
                                            <td className="table-primary">{obj.phnum}</td>
                                            <td className="table-light">{obj.pannum}</td>
                                            <td className="table-primary">{obj.aanum}</td>
                                            <td className="table-light">{obj.add}</td>
                                            <td className="table-primary">
                                                <NavLink to={`/cibilreg`}><button type='submit' className='btn btn-danger cibilb  '>Cibil</button></NavLink>
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default OeList