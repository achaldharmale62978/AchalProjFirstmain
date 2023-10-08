import React from 'react'
import '../css files/Oecss/cibilreg.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CibilReg = () => {

    const navigat = useNavigate()

    const { register, handleSubmit } = useForm()

    function savedata(data) {
        axios.post(`http://localhost:8090/cibil`,data)
        console.log(data)
         alert('data addedd')
        navigat('/cibilreg')
    }
    return (
        <>

            <div className='s1'>
                <div className='bb11'>
                    <div className='sidebar  col-auto i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

                        <h4 style={{ fontWeight: 'bold',backgroundColor:'white' }} className='si'>Operational Executive</h4>

                        <NavLink to='/oelist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Operational Exicutive <br /> Enquery List</NavLink>

                        <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px',textAlign:'center' }}>Log Out</NavLink>


                    </div>
                </div>
                <div className='bb11 col-8'>
                <h5 className='tt '>* Update Cibil Status *</h5>
                <hr />
                <div className='bb1 col-8 offset-1'>
                    <form onSubmit={handleSubmit(savedata)} >
                        <div className='col'>
                            <div className='form-group t1'>
                                <label htmlFor='eid' className='col-3' >Enquery ID : </label>
                                <input id='eid' type='text' className='form-control   offset-3' {...register('eid')} />
                            </div><br /><br />
                            <div className='form-group t1'>
                                <label htmlFor='cscore' className='col-3' >Cibil Score : </label>
                                <input id='cscore' type='text' className='form-control  offset-3' {...register('cscore')} />
                            </div><br /><br />
                            <div className='form-group t1'>
                                <label htmlFor='csdate' className='col-3' >Cibil Score Date : </label>
                                <input id='csdate' type='date' className='form-control offset-3' {...register('csdate')} />
                            </div><br /><br />
                            <div className='form-group t1'>
                                <label htmlFor='status' className='col-3' >Status : </label>
                                <input id='status' type='text' className='form-control  offset-3' {...register('status')} />
                            </div><br /><br />
                            <div className='form-group t1'>
                                <label htmlFor='remark' className='col-3' >Remark : </label>
                                <input id='remark' type='text' className='form-control  offset-3' {...register('remark')} />
                            </div><br /><br />

                            <div>
                                <center>
                                    <button type='submit' className='btn btn-success col-4'>Submit</button>&ensp;
                                    <button type='reset' className='btn btn-warning col-4'>Reset</button>
                                </center>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default CibilReg