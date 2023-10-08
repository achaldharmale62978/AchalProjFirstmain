import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import '../css files/cmmodule/cmlist.css'
import axios from 'axios'
const Cmlist = () => {

    const [usee,setusee]=useState([])

    async function fetchdata(){
        const result = await 
        axios.get(`http://localhost:8090/registration`)
        setusee(result.data)
        console.log(result.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    

    return (
        <>

            <div className='b1'>

                <div className='si'>
                    <div className='sidebar  col-auto i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                        <h5 style={{ fontWeight: 'bold' }} className='si'>Corporate Exicutive </h5>

                        {/* <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

                        <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink> */}

                        <NavLink to='/cmlist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Corporate Exicutive List</NavLink>

                        <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

                    </div>
                </div>

                <div className='b2 '>
                    <div>
                    <h5 className='r col-12'>Basic Information :</h5>
                        <table className="table table-bordered">
                            <thead>
                               
                                <tr>
                                    <th scope="col " className="table-light">ID</th>
                                    <th scope="col" className="table-primary">First Name</th>
                                    <th scope="col" className="table-light">Last Name</th>
                                    <th scope="col" className="table-primary">B-date</th>
                                    <th scope="col" className="table-light">Gender</th>
                                    <th scope="col" className="table-primary">City</th>
                                    <th scope="col" className="table-light ">Email</th>
                                    <th scope="col" className="table-primary">Phone No.</th>
                                    <th scope="col" className="table-light">Pan-Card</th>
                                    <th scope="col" className="table-primary">AdharCard</th>
                                    <th scope="col" className="table-light">Address</th>
                                    <th scope="col" className="table-primary">Update</th>
                                    <th scope="col" className="table-light">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usee.map(obj => {
                                        return (
                                            <tr key={obj.idr}>
                                                <td>{obj.idr}</td>
                                                <td>{obj.bfname}</td>
                                                <td>{obj.blname}</td>
                                                <td>{obj.bbday}</td>
                                                <td>{obj.genderr}</td>
                                                <td>{obj.bcity}</td>
                                                <td>{obj.bemail}</td>
                                                <td>{obj.bphnum}</td>
                                                <td>{obj.bpannum}</td>
                                                <td>{obj.baanum}</td>
                                                <td>{obj.badd}</td>
                                                <td><GrUpdate /></td>
                                                <td><AiFillDelete /></td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                    <div>
                    <h5 className='r col-12'>Permanent Address :</h5>
                        <table className="table table-bordered">
                            <thead>
                               
                                <tr>

                                    <th scope="col" className="table-primary">House No.</th>
                                    <th scope="col" className="table-light">Street No.</th>
                                    <th scope="col" className="table-primary">Area No.</th>
                                    <th scope="col" className="table-light">City Name</th>
                                    <th scope="col" className="table-primary">District Name</th>
                                    <th scope="col" className="table-light ">Status</th>
                                    <th scope="col" className="table-primary">Zip Code</th>
                                    <th scope="col" className="table-light ">Update</th>
                                    <th scope="col" className="table-primary">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usee.map(obj => {
                                        return (
                                            <tr >
                                                <td>{obj.hname}</td>
                                                <td>{obj.sname}</td>
                                                <td>{obj.aname}</td>
                                                <td>{obj.cname}</td>
                                                <td>{obj.dname}</td>
                                                <td>{obj.state}</td>
                                                <td>{obj.zip}</td>
                                                <td><GrUpdate /></td>
                                                <td><AiFillDelete /></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div>
                        <h5 className='r col-12'>Local Address :</h5>
                            <table className="table table-bordered">
                                <thead>
                                    
                                    <tr>

                                        <th scope="col" className="table-primary">House No.</th>
                                        <th scope="col" className="table-light">Street No.</th>
                                        <th scope="col" className="table-primary">Area No.</th>
                                        <th scope="col" className="table-light">City Name</th>
                                        <th scope="col" className="table-primary">District Name</th>
                                        <th scope="col" className="table-light ">Status</th>
                                        <th scope="col" className="table-primary">Zip Code</th>
                                        <th scope="col" className="table-light ">Update</th>
                                        <th scope="col" className="table-primary">Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usee.map(obj => {
                                            return (
                                                <tr>
                                                    <td>{obj.honame}</td>
                                                    <td>{obj.stname}</td>
                                                    <td>{obj.aaname}</td>
                                                    <td>{obj.ciname}</td>
                                                    <td>{obj.diname}</td>
                                                    <td>{obj.st}</td>
                                                    <td>{obj.ziip}</td>
                                                    <td><GrUpdate /></td>
                                                    <td><AiFillDelete /></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                            <div>
                            <h5 className='r col-12'>Loan Information :</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        
                                        <tr>

                                            <th scope="col" className="table-primary">Loan Amount</th>
                                            <th scope="col" className="table-light">Tenure</th>
                                            <th scope="col" className="table-primary">Paid Amount</th>
                                            <th scope="col" className="table-light">Remaining Amount</th>
                                            <th scope="col" className="table-light ">Status</th>
                                            <th scope="col" className="table-primary">Remark</th>
                                            <th scope="col" className="table-light ">Update</th>
                                            <th scope="col" className="table-primary">Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usee.map(obj => {
                                                return (
                                                    <tr>
                                                        <td>{obj.llamount}</td>
                                                        <td>{obj.ltenure}</td>
                                                        <td>{obj.lpamount}</td>
                                                        <td>{obj.lramount}</td>
                                                        <td>{obj.lsta}</td>
                                                        <td>{obj.lremark}</td>
                                                        <td><GrUpdate /></td>
                                                        <td><AiFillDelete /></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                                <div>
                                <h5 className='r col-12'>Account Details :</h5>
                                    <table className="table table-bordered">
                                        <thead>
                                            
                                            <tr>

                                                <th scope="col" className="table-primary">Account Type</th>
                                                <th scope="col" className="table-light">Account Balance</th>
                                                <th scope="col" className="table-primary">Account Holder Name</th>
                                                <th scope="col" className="table-light">Account Status</th>
                                                <th scope="col" className="table-light ">Account No.</th>
                                                <th scope="col" className="table-light ">Update</th>
                                                <th scope="col" className="table-primary">Delete</th>
                                                {/* <th scope="col" className="table-primary">Remark</th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usee.map(obj => {
                                                    return (
                                                        <tr>
                                                            <td>{obj.atype}</td>
                                                            <td>{obj.abalance}</td>
                                                            <td>{obj.aahname}</td>
                                                            <td>{obj.astatus}</td>
                                                            <td>{obj.anum}</td>
                                                            <td><GrUpdate /></td>
                                                            <td><AiFillDelete /></td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                    <div>
                                    <h5 className='r col-12'>Company Information :</h5>
                                        <table className="table table-bordered">
                                            <thead>
                                               
                                                <tr>

                                                    <th scope="col" className="table-primary">Company Name</th>
                                                    <th scope="col" className="table-light">Company Post</th>
                                                    <th scope="col" className="table-primary">Monthly Income</th>
                                                    <th scope="col" className="table-light">Annual Income</th>
                                                    <th scope="col" className="table-light ">Company Add.</th>
                                                    <th scope="col" className="table-primary">City</th>
                                                    <th scope="col" className="table-light ">Update</th>
                                                    <th scope="col" className="table-primary">Delete</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    usee.map(obj => {
                                                        return (
                                                            <tr>
                                                                <td>{obj.ccname}</td>
                                                                <td>{obj.cpost}</td>
                                                                <td>{obj.min}</td>
                                                                <td>{obj.ain}</td>
                                                                <td>{obj.cadd}</td>
                                                                <td>{obj.ccity}</td>
                                                                <td><GrUpdate /></td>
                                                                <td><AiFillDelete /></td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cmlist