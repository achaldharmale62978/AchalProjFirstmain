import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css files/reconect css/enquery.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Enquery = () => {

  const{register,handleSubmit}=useForm()

  const navigate=useNavigate()

  function savedata(data){
    axios.post('http://localhost:8090/projdata',data)
    console.log(data)
    navigate('/enquery')
    alert('data addedd')
  }

  return (
    <>
      <div className='b1'>
        <div className='si'>
          <div className='sidebar  col-auto i1' style={{ backgroundColor: 'white', backgroundSize: 'cover' }}>

            <h4 style={{ fontWeight: 'bold'  }} className='si'>Regional Executive</h4>

            <NavLink to='/enquery' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery</NavLink>

            <NavLink to='/enquerylist' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Enquery List</NavLink>

            <NavLink to='/cibilstatus' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Cibil Status</NavLink>

            <NavLink to='/logout ' className='ii ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Log Out</NavLink>

          </div>
        </div>

        <div className='b2 border'>
          <form className='col-12  ' onSubmit={handleSubmit(savedata)}>
            <div className='row g-3'>
              <div className=' col-auto form-group '>
                <label htmlFor='fname'>First Name : </label>
                <input id='fname' className='form-control' type='text' {...register('fname')} />
              </div>
              <div className='col-auto form-group '>
                <label htmlFor='lname'>Last Name : </label>
                <input id='lname' className='form-control' type='text' {...register('lname')}/>
              </div>
            </div><br />
            <div className='row g-3'>
              <div className=' form-group  col-auto'>
                <label htmlFor='bday'>Birth Date : </label>
                <input id='bday' className='form-control' type='date' {...register('bday')}/>
              </div>
              <div className=' form-group col-auto'>
                <label htmlFor='gender'>Gender : </label>
                <br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" {...register('gender')}/>
                  <label className="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" {...register('gender')}/>
                  <label className="form-check-label" for="inlineRadio2">Female</label>
                </div><br />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" disabled {...register('gender')}/>
                  <label className="form-check-label" for="inlineRadio3">Other (disabled)</label>
                </div>
              </div>
            </div><br />
            <div className='row g-3'>
              <div className='col-auto form-group'>
                <label htmlFor='city'>City : </label>
                <input id='city' type='text' className='form-control' {...register('city')}/>
              </div>
              <div className='col-auto form-group'>
                <label htmlFor='email'>Email : </label>
                <input id='email' className='form-control' type='email' {...register('email')}/>
              </div>
            </div><br />
            <div className='row g-3'>
              <div className='col-auto form-group'>
                <label htmlFor='phnum'>Phone No : </label>
                <input id='phnum' type='number' className='form-control' {...register('phnum')}/>
              </div>
              <div className='col-auto form-group'>
                <label htmlFor='pannum'>PanCard No : </label>
                <input id='pannum' type='text' className='form-control' {...register('pannum')}/>
              </div>
            </div><br />
            <div className='row g-3'>
              <div className='col-auto form-group'>
                <label htmlFor='aanum'>AdharCard No : </label>
                <input id='aanum' type='number' className='form-control' {...register('aanum')}/>
              </div>
              <div className='col-auto form-group'>
                <label htmlFor='add'>Address : </label>
                <textarea id='add' className='form-control' {...register('add')}/>
              </div>
            </div><br />

            <div className='row'>
            <button type='submit' className='btn btn1 col-5 offset-1'>Submit</button>&ensp;
             <button type='reset' className='btn btn2 col-5'>Reset</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Enquery