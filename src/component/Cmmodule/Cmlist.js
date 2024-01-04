import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import '../css files/cmmodule/cmlist.css'
import axios from 'axios'
const Cmlist = () => {

    const [usee, setusee] = useState([])
    const [serchTerm, setserchTerm] = useState('')
    
    async function fetchdata() {
        const result = await
            axios.get(`http://localhost:8090/registration`)
        setusee(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    // const filterdata = usee.filter((users) => {
    //     // return users.fname.toLowerCase().includes(serch.toLowerCase()) || users.lname.toLowerCase().includes(serch.toLowerCase())
    //     return users.fname.toLowerCase().includes(serchTerm.toLowerCase()) || users.lname.toLowerCase().includes(serchTerm.toLowerCase());
    // })

    // const filterdata = usee.filter((users) => {
    //     const firstName = users.fname || ''; // default to an empty string if undefined
    //     const lastName = users.lname || '';
    //     return users.firstName.toUpperCase().includes(serchTerm.toUpperCase()) || users.lastName.toUpperCase().includes(serchTerm.toUpperCase());
    // }) 
    const filterdata = usee.filter((users) => {
        const firstName = users.fname ? users.fname.toLowerCase() : '';
        const lastName = users.lname ? users.lname.toLowerCase() : '';
    
        return firstName.includes(serchTerm.toLowerCase()) || lastName.includes(serchTerm.toLowerCase());
    });
    

    return (
        <>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        {/* <img src={img} style={{fontSize:'10px'}}></img> */}
                        <h4 style={{ fontWeight: 'bold' }} className=''>Credit Manager Exicutive</h4>
                        <a href='#' class="navbar-brand" ></a>
                        <form class="d-flex col-3" style={{ textAlign: 'center' }}>
                            <input class="form-control me-2 "
                                type="search" 
                                placeholder=" ....Search....." aria-label="Search"
                                value={serchTerm}
                                onChange={(e) => setserchTerm(e.target.value)} />
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </nav>
            </div>
            <div className='b1'>

                {/* <div>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                           
                            <h4 style={{ fontWeight: 'bold' }} className=''>Credit Manager Exicutive</h4>
                            <a class="navbar-brand"></a>
                            <form class="d-flex col-3" style={{ textAlign: 'center' }}>
                                <input class="form-control me-2 " type="search" placeholder=" ....Search....." aria-label="Search"
                                    value={serch}
                                    onChange={(e) => setserch(e.target.value)} />
                               
                            </form>
                        </div>
                    </nav>
                </div> */}
                <div className='si'>
                    <div className='sidebar  col-auto i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                        <h5 style={{ fontWeight: 'bold' }} className=''>Credit Manager Exicutive </h5>

                        {/* <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

                        <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink> */}

                        <NavLink to='/cmlist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Credit Manager Exicutive List</NavLink>

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
                                    filterdata.map(obj => {
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
                                                <td>
                                                    <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                </td>

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
                                    filterdata.map(obj => {
                                        return (
                                            <tr >
                                                <td>{obj.hname}</td>
                                                <td>{obj.sname}</td>
                                                <td>{obj.aname}</td>
                                                <td>{obj.cname}</td>
                                                <td>{obj.dname}</td>
                                                <td>{obj.state}</td>
                                                <td>{obj.zip}</td>
                                                <td>
                                                    <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                </td>
                                                <td>
                                                    <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                </td>
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
                                        filterdata.map(obj => {
                                            return (
                                                <tr>
                                                    <td>{obj.honame}</td>
                                                    <td>{obj.stname}</td>
                                                    <td>{obj.aaname}</td>
                                                    <td>{obj.ciname}</td>
                                                    <td>{obj.diname}</td>
                                                    <td>{obj.st}</td>
                                                    <td>{obj.ziip}</td>
                                                    <td>
                                                        <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                    </td>
                                                    <td>
                                                        <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                    </td>
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
                                           filterdata.map(obj => {
                                                return (
                                                    <tr>
                                                        <td>{obj.llamount}</td>
                                                        <td>{obj.ltenure}</td>
                                                        <td>{obj.lpamount}</td>
                                                        <td>{obj.lramount}</td>
                                                        <td>{obj.lsta}</td>
                                                        <td>{obj.lremark}</td>
                                                        <td>
                                                            <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                        </td>
                                                        <td>
                                                            <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                        </td>
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
                                                filterdata.map(obj => {
                                                    return (
                                                        <tr>
                                                            <td>{obj.atype}</td>
                                                            <td>{obj.abalance}</td>
                                                            <td>{obj.aahname}</td>
                                                            <td>{obj.astatus}</td>
                                                            <td>{obj.anum}</td>
                                                            <td>
                                                                <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                            </td>
                                                            <td>
                                                                <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                            </td>
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
                                                    filterdata.map(obj => {
                                                        return (
                                                            <tr>
                                                                <td>{obj.ccname}</td>
                                                                <td>{obj.cpost}</td>
                                                                <td>{obj.min}</td>
                                                                <td>{obj.ain}</td>
                                                                <td>{obj.cadd}</td>
                                                                <td>{obj.ccity}</td>
                                                                <td>
                                                                    <NavLink to={`/cmupdate/${obj.idr}`}><GrUpdate /></NavLink>
                                                                </td>
                                                                <td>
                                                                    <NavLink to={`/cmdelete/${obj.idr}`}><AiFillDelete /></NavLink>
                                                                </td>
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