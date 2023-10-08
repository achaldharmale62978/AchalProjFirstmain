import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css files/pages css/login.css'
import { AiFillHome } from 'react-icons/ai'

const Login = () => {

    const [name, setname] = useState("")
    const [pwd, setpwd] = useState("")
    const navigate = useNavigate()

    const islogin = () => {
        if (name === "re" && pwd === "re") {
            alert("login successful")
            navigate("/sidebar")
        } else if (name === 'oe' && pwd === 'oe') {
            alert("login successful")
            navigate('/oepage')
        } else if (name === "cm" && pwd === "cm") {
            alert("login successful")
            navigate('/cmpage')
        } else {
            alert("not connected")
        }
    }
    return (
        <>

            <div className='backim'>
                <form >
                    <div className='col-1 icone'>
                     
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link icone" aria-current="page" href="/"><AiFillHome /></a>
                                {/* <a className="group-item icone"><a className='i' href='/'><AiFillHome /></a></a> */}
                            </li>
                        </ul>
                    </div>
                    <div className='col-6  offset-3'>
                        <div className='ma '>
                            <div className='border' >
                                <div className='reg'>
                                    <label htmlFor='reg'>Registration Form</label>
                                </div>
                                <div className='form-group forms'>
                                    <label htmlFor='inputEmail4'>User Name : </label>
                                    <input id='re' type='email' className='form-control' value={name} onChange={e => setname(e.target.value)} />
                                </div><br /><br />
                                <div className='form-group forms'>
                                    <label htmlFor='inputEmail4'>PassWord : </label>
                                    <input id='pawd' type='password' className='form-control' value={pwd} onChange={e => setpwd(e.target.value)} />
                                </div><br />
                                <div className='form-group forms'>
                                    <input type='signup' value='SIGNUP' onClick={islogin} className='btn btn-success col-3'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login