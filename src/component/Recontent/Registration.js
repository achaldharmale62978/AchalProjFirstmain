import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css files/reconect css/rege.css'
import axios from 'axios'

const Registration = () => {
    const { register, handleSubmit } = useForm()
    const navigat = useNavigate()

    function savedata(data) {
        axios.post(`http://localhost:8090/registration`,data)
        alert("data added")
        navigat('/registration')
        console.log(data)
    }
    return (
        <>
            <div className=''>

                <div className='b1'>
                    <div className='  col-2 ' style={{ borderColor: 'white' }}>

                        <h4 style={{ fontWeight: 'bold' }} className='  '>Regional Executive</h4>

                        <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

                        <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink>

                        <NavLink to='/cibilstatus' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Cibil Status</NavLink>

                        <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

                    </div>



                    <div className='b1   border bordered-secondary '>
                        <form className=' offset-1' onSubmit={handleSubmit(savedata)}>

                            <div className='he2'>
                                REGISTRATION FROM :
                            </div>&ensp;
                            <div className='he1'>
                                Basic Information :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='idr'>ID : </label>
                                    <input id='idr' className='form-control' type='number' {...register('idr')} />
                                </div>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='fname'>First Name : </label>
                                    <input id='fname' className='form-control' type='text' {...register('bfname')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='lname'>Last Name : </label>
                                    <input id='lname' className='form-control' type='text' {...register('blname')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='bday'>Birth Date : </label>
                                    <input id='bday' className='form-control' type='date' {...register('bbday')} />
                                </div>
                                
                            </div>&ensp;
                            <div className='row g-5'>
                            <div className=' form-group col-3'>
                                    <label htmlFor='genderr'>Gender : </label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" {...register('genderr')} />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" {...register('genderr')} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                    </div><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" disabled {...register('genderr')} />
                                        <label className="form-check-label" htmlFor="inlineRadio3">Other (disabled)</label>
                                    </div>
                                </div>
                                <div className='col-2 form-group'>
                                    <label htmlFor='city'>City : </label>
                                    <input id='city' type='text' className='form-control' {...register('bcity')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='email'>Email : </label>
                                    <input id='email' className='form-control' type='email' {...register('bemail')} />
                                </div>
                                <div className='col-3 form-group'>
                                    <label htmlFor='phnum'>Phone No : </label>
                                    <input id='phnum' type='number' className='form-control' {...register('bphnum')} />
                                </div>
                                
                            </div><br />
                            <div className='row g-5'>
                            <div className='col-3 form-group'>
                                    <label htmlFor='pannum'>PanCard No : </label>
                                    <input id='pannum' type='text' className='form-control' {...register('bpannum')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='aanum'>AdharCard No : </label>
                                    <input id='aanum' type='number' className='form-control' {...register('baanum')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='add'>Address : </label>
                                    <textarea id='add' className='form-control' {...register('badd')} />
                                </div>
                            </div><br />


                            <hr />
                            <div className='he3'>
                                Customer Address :
                            </div>&ensp;
                            <div className='he1'>
                                Permanent Address :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='hname'>House Number : </label>
                                    <input id='hname' className='form-control' type='text' {...register('hname')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='lname'>Street Number : </label>
                                    <input id='lname' className='form-control' type='text' {...register('sname')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='aname'>Area Name : </label>
                                    <input id='aname' className='form-control' type='text' {...register('aname')} />
                                </div>
                                <div className=' form-group  col-3'>
                                    <label htmlFor='cname'>City Name : </label>
                                    <input id='cname' className='form-control' type='text' {...register('cname')} />
                                </div>

                            </div>&ensp;
                            <div className='row g-5'>
                                <div className='col-2 form-group'>
                                    <label htmlFor='dname'>District Name : </label>
                                    <input id='dname' type='text' className='form-control' {...register('dname')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='state'>State : </label>
                                    <input id='state' className='form-control' type='state' {...register('state')} />
                                </div>
                                <div className='col-3 form-group'>
                                    <label htmlFor='zip'>Zip Code : </label>
                                    <input id='zip' type='number' className='form-control' {...register('zip')} />
                                </div>
                            </div><br />

                            <hr />
                            <div className='he1'>
                                Local Address :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='honame'>House Number : </label>
                                    <input id='honame' className='form-control' type='text' {...register('honame')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='stname'>Street Number : </label>
                                    <input id='stname' className='form-control' type='text' {...register('stname')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='aaname'>Area Name : </label>
                                    <input id='aaname' className='form-control' type='text' {...register('aaname')} />
                                </div>
                                <div className=' form-group  col-3'>
                                    <label htmlFor='ciname'>City Name : </label>
                                    <input id='ciname' className='form-control' type='text' {...register('ciname')} />
                                </div>

                            </div>&ensp;
                            <div className='row g-5'>
                                <div className='col-2 form-group'>
                                    <label htmlFor='diname'>District Name : </label>
                                    <input id='diname' type='text' className='form-control' {...register('diname')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='st'>State : </label>
                                    <input id='st' className='form-control' type='text' {...register('st')} />
                                </div>
                                <div className='col-3 form-group'>
                                    <label htmlFor='zip'>Zip Code : </label>
                                    <input id='zip' type='number' className='form-control' {...register('ziip')} />
                                </div>
                            </div><br />

                            <hr />
                            <div className='he1'>
                                Loan Information :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='lamount'>Loan Amount : </label>
                                    <input id='lamount' className='form-control' type='number' {...register('llamount')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='tenure'>Tenure : </label>
                                    <input id='tenure' className='form-control' type='text' {...register('ltenure')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='pamount'>Paid Amount : </label>
                                    <input id='pamount' className='form-control' type='number' {...register('lpamount')} />
                                </div>
                                {/* <div className=' form-group  col-3'>
                                    <label htmlFor='cname'>City Name : </label>
                                    <input id='cname' className='form-control' type='text' {...register('bday')} />
                                </div> */}
                            </div>&ensp;
                            <div className='row g-5'>
                                <div className='col-3 form-group'>
                                    <label htmlFor='ramount'>Remaining Amount : </label>
                                    <input id='ramount' type='number' className='form-control' {...register('lramount')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='sta'>Status : </label>
                                    <input id='sta' className='form-control' type='text' {...register('lsta')} />
                                </div>
                                <div className='col-3 form-group'>
                                    <label htmlFor='remark'>Remark : </label>
                                    <input id='remark' type='text' className='form-control' {...register('lremark')} />
                                </div>
                            </div><br />

                            <hr />
                            <div className='he1'>
                                Account Details :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='atype'>Account Type : </label>
                                    <input id='atype' className='form-control' type='text' {...register('atype')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='abalance'>Account Balance : </label>
                                    <input id='abalance' className='form-control' type='number' {...register('abalance')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='aahname'>Account Holder Name : </label>
                                    <input id='aahname' className='form-control' type='text' {...register('aahname')} />
                                </div>
                                {/* <div className=' form-group  col-3'>
                                    <label htmlFor='cname'>City Name : </label>
                                    <input id='cname' className='form-control' type='text' {...register('bday')} />
                                </div> */}
                            </div>&ensp;
                            <div className='row g-5'>
                                <div className='col-3 form-group'>
                                    <label htmlFor='astatuss'>Account Status : </label>
                                    <input id='astatus' type='text' className='form-control' {...register('astatus')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='anum'>Account Number : </label>
                                    <input id='anum' className='form-control' type='number' {...register('anum')} />
                                </div>
                                {/* <div className='col-3 form-group'>
                                    <label htmlFor='remark'>Remark : </label>
                                    <input id='remark' type='number' className='form-control' {...register('phnum')} />
                                </div> */}
                            </div><br />

                            <hr />
                            <div className='he1'>
                                Company Details :
                            </div>&ensp;
                            <div className='row gy-5 '>
                                <div className=' col-3 form-group '>
                                    <label htmlFor='cname'>Company Name  : </label>
                                    <input id='cname' className='form-control' type='text' {...register('ccname')} />
                                </div>
                                <div className='col-3 form-group '>
                                    <label htmlFor='cPost'>Company Post : </label>
                                    <input id='cPost' className='form-control' type='text' {...register('cpost')} />
                                </div>

                                <div className=' form-group  col-3'>
                                    <label htmlFor='min'>Monthly Income : </label>
                                    <input id='min' className='form-control' type='number' {...register('min')} />
                                </div>
                                {/* <div className=' form-group  col-3'>
                                    <label htmlFor='cname'>City Name : </label>
                                    <input id='cname' className='form-control' type='text' {...register('bday')} />
                                </div> */}
                            </div>&ensp;
                            <div className='row g-5'>
                                <div className='col-3 form-group'>
                                    <label htmlFor='ain'>Annual Income : </label>
                                    <input id='ain' type='number' className='form-control' {...register('ain')} />
                                </div>
                                <div className='col-4 form-group'>
                                    <label htmlFor='cadd'>Company Address : </label>
                                    <input id='cadd' className='form-control' type='text' {...register('cadd')} />
                                </div>
                                <div className='col-3 form-group'>
                                    <label htmlFor='ccity'>City : </label>
                                    <input id='ccity' type='text' className='form-control' {...register('ccity')} />
                                </div>
                            </div><br />






                            &ensp;
                            <div className='row'>
                                <button type='submit' className='btn btn1 col-3 offset-1'>Submit</button>&ensp;
                                <button type='reset' className='btn btn2 col-3'>Reset</button>
                            </div>




                            {/* <div class="container"> */}
                            {/* <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            <div class="col">Column</div>
                            <div class="col">Column</div>
                            <div class="col">Column</div>
                            <div class="col">Column</div>
                        </div> */}
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration