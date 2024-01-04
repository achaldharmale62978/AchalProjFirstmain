import React from 'react'
import '../.././../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import loanlogo from '../../assects/corporate/images3.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import { AiOutlineEnvironment } from 'react-icons/ai'
import { FaRegBell } from 'react-icons/fa'
import { BsBank } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" style={{ fontWeight: 'bold', fontFamily: 'serif', fontSize: '20px' }}>

                    <a className="navbar-brand" href="#" style={{ fontSize: '30px', paddingLeft: '100px' }}>CAR LOAN </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <img src={loanlogo} style={{ height: '70px' }}></img>

                    <div className="collapse navbar-collapse nm offset-1" id="navbarSupportedContent">

                        <div className=" logn " >
                            <ul class="nav justify-content-end  logn"   >
                                <li className="  logn" style={{ paddingLeft: '700px', color: "black " }}  >
                                    <a className="nav-link active btn btn-outline-primary  logn" aria-current="page" href="/login">Log IN</a>
                                </li>
                            </ul>
                        </div>
                       
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>

            </nav>
            <nav className=" n3  ">

                <div className='n1'>
                    <nav class="nav u" >
                        <a class="nav-link u1" aria-current="page" href="/">Home</a>
                        <a class="nav-link u1" href="/about">About</a>
                        <a class="nav-link u1" href="/corporate">Corporate</a>
                        <a class="nav-link u1 disabled">Disabled</a>&ensp;
                        <li class="nav-item nf">
                            <a class="nav n2 n " aria-current="page" href="/irate"><BsBank />
                            </a>
                            <div className='f' >Attractive  <br />Intrest Rate</div>
                        </li>

                        {/* <ul class="nav justify-content-end t"> */}

                        {/* <li class="nav-item nf">
                            <a class="nav n2 n " aria-current="page" href="/irate"><BsBank />
                            </a>
                            <div className='f' >Attractive  <br />Intrest Rate</div>
                        </li> */}

                        {/* &ensp;&ensp; */}
                        <li class="nav-item t">
                            <a class="nav n2 " aria-current="page" href="/whatsup"><ImWhatsapp /></a>
                        </li>&ensp;&ensp;
                        <li class="nav-item">
                            <a class="nav n2 " aria-current="page" href="/location"><AiOutlineEnvironment /></a>
                        </li>&ensp;&ensp;
                        <li class="nav-item">
                            <a class="nav n2" aria-current="page" href="/serch"><PiMagnifyingGlassBold /></a>
                        </li>&ensp;&ensp;
                        <li class="nav-item">
                            <a class="nav n2 " aria-current="page" href="/contact"><BsFillTelephoneFill /></a>
                        </li>&ensp;&ensp;
                        <li class="nav-item ">
                            <a class="nav n2" aria-current="page" href="/email"><AiOutlineMail /></a>
                        </li>&ensp;&ensp;
                        <li class="nav-item">
                            <a class="nav n2 " aria-current="page" href="/notification"><FaRegBell /></a>
                        </li>
                        {/* </ul> */}
                    </nav>
                </div>
            </nav> 



        </>
    )
}

export default Navbar