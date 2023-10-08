import React from 'react'
import img1 from '../../assects/corporate/d1.jpeg'
import img2 from '../../assects/corporate/d2.jpeg'
import img3 from '../../assects/corporate/d3.jpeg'
import cc from '../../assects/corporate/cc.jpeg'
import sb from '../../assects/corporate/sb.jpeg'
// import pl from '../../assects/corporate/pl.jpeg'

import im1 from '../../assects/corporate/im33.avif'
import im2 from '../../assects/corporate/im2.jpeg'
import im3 from '../../assects/corporate/im3.avif'



import '../css files/layout css/corporate.css'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

import { BsFillTelephoneFill } from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'




const Corporate = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <div className="container">
          <div className="row 1">
            <div className="col-6">
              <div className=' mt-3 offset-2 imblock'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>&ensp;
            <div className="col-3 order-5 mt-3 loanblock">

              <p> Personal Banking Servies <br />
                <b>What are you looking for ?</b>
              </p>
              <label htmlFor='loan'>Loans</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>select</option>
                <option value="card">Card</option>
                <option value="account">Account</option>
                <option value="desposite">Deposite</option>
                <option value="emi">EMI</option>
                <option value="life insureance">Life Insureance</option>
              </select>

              <label htmlFor='loan'>Home Loans</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>select</option>
                <option value="home loan">Home Loan</option>
                <option value="personal loan">Personal Loan</option>
                <option value="loan & credit card">Loan & Credit Card</option>
                <option value="smartemi"> SmartEMI</option>
                <option value="new car loan">New Car Loan</option>
              </select>
              <p style={{ textAlign: "center", paddingTop: "15px" }}><a href=''>Know More </a></p>
            </div>
            {/* <div className="col order-1">
            Third 
          </div> */}
          </div>
          <hr />


          <div className="row 2">

            <div className="col-4 offset-2">
              <h5>Calculator for Your Needs</h5>
              <div className="card">
                <div className="card-body  pic1">
                  <a className='i' href=''> <p className="card-text">Calculate your monthly outgo with our personal loan EMI Calculator.</p></a>
                </div>
              </div><br />
              <div className="card pic2">
                <div className="card-body">
                  <p className="card-text">Calculate your monthly outgo with our personal loan EMI Calculator.</p>
                </div>
              </div><br />
              <div className="card pic3">
                <div className="card-body">
                  <p className="card-text">Calculate your monthly outgo with our personal loan EMI Calculator.</p>
                </div>
              </div><br />
            </div><br />

            <div className="col-3">
              <h5>Offers for You</h5>
              <div className="cardd 1 " >
                <div className="card-body">
                  <p className="card-text cc "><b>BEST-in-className <br />
                    CREDIT CARD &ensp; </b><br />
                    <img src={cc} style={{ width: '5rem', height: '3rem' }} className='im' />
                  </p>
                  <p>Ready for You </p>
                  <hr />
                  <div className="card-body">
                    <p className="card-text cc "><b>BIGGER SAVINGS <br />
                      ASSURED &ensp; </b>
                      <br />
                      <img src={sb} style={{ width: '8rem', height: '3rem' }} className='im' />
                    </p>
                    On SmartBuy &ensp;
                    <a href=''> VIEW ALL</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h5>NEED HELP ?</h5>
              <div className='un' >
                <ul className="list-group ">
                  <li className="list-group-item"><a className='i' href=''>Contact Us</a></li>
                  <li className="list-group-item"><a className='i' href=''>Insta Service</a></li>
                  <li className="list-group-item"><a className='i' href=''>Merger FAQS</a></li>
                  <li className="list-group-item"><a className='i' href=''>Intrest Rate</a></li>
                  <li className="list-group-item"><a className='i' href=''>Credit Card Service</a></li>
                  <li className="list-group-item"><a className='i' href=''>Report Unothorised Transaction</a></li>
                  <li className="list-group-item"><a className='' href=''>View More</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className='row 3'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <h5>Learning Center...</h5>
                <div className="card-group cd4 ">
                  <div className="card cd3 pics1 ">
                    <h5 className="card-title"></h5>
                    {/* <img src={pl} className="card-img-top" alt="..." style={{ height: "100px" }} /> */}
                    <div className="card-body">
                    </div>
                    <p className="card-text-1"> <NavLink className='i'>REEDEM YOUR Credit & <br /> Debit CARD POINTS</NavLink></p>
                  </div>&ensp;<br />

                  <div className="card cd3 pics2">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <p className="card-text-1"> <NavLink className='i'>CONVERT Credit CARD <br /> PAYMENT TO EMI</NavLink></p>
                  </div>&ensp;<br />

                  <div className="card cd3 pics2">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                    </div>
                    <p className="card-text-1"> <NavLink className='i'>CONVERT Credit CARD <br /> PAYMENT TO EMI</NavLink></p>
                  </div>&ensp;<br />

                  <div className="card cd3 pics3">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      {/* <p className="card-text"><small className="text-muted">...<br/>...</small></p>
                  <p className="card-text-1"> HOW TO BE AN  ENTREPRENEUR</p> */}
                      <p className="card-text"> .... <br /> ..</p>
                    </div>
                    <p className="card-text-1"> <NavLink className='i'>HOW TO BE AN <br /> ENTREPRENEUR</NavLink></p>
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='row ' >
            <div className='container col-10  mt-5'>
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                  <div class="carousel-item active">
                    <img src={im1} class="d-block w-100" alt="..." style={{ height: '500px' }}  />
                  </div>
                  <div class="carousel-item">
                    <img src={im2} class="d-block w-100" alt="..." style={{ height: '500px' }} />
                  </div>
                  <div class="carousel-item">
                    <img src={im3} class="d-block w-100" alt="..." style={{ height: '500px' }} />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div><br /><br />



        <hr />
        <div className='con'>
          <div className="container ">
            <div className="row con">
              <div className="col-2 ">
                <ul className="list-group lis2 ">
                  <a className="group-item  lis2 m" aria-current="true">About Us</a>
                  <a className="group-item  lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2">< a className='i' href=''>And a fifth one</a></a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-group lis2">
                  <a className="group-item lis2 m" aria-current="true">Usefull Links</a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-group lis2">
                  <a className="group-item lis2 m" aria-current="true"> Resources </a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-group lis2">
                  <a className="group-item lis2 m" aria-current="true">Calculators</a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                </ul>
              </div>
              <div className="col-2 ">
                <ul className="list-group lis2">
                  <a className="group-item lis2 m" aria-current="true">Need Help</a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                  <a className="group-item lis2"><a className='i' href=''>A fourth item</a></a>
                  <a className="group-item lis2"><a className='i' href=''>And a fifth one</a></a>
                </ul>
              </div>
              {/* <div className="col-2">
                <ul className="list-group lis2">
                  <a className="group-item lis2 m" aria-current="true">Connect</a>
                  <a className="group-item lis2" ><a className='i' href=''> FaceBook</a></a>
                  <a className="group-item lis2"><a className='i' href=''>YouTube</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Instagram</a></a>
                  <a className="group-item lis2"><a className='i' href=''>Twitter</a></a>
                </ul>
              </div> */}
              <div className="col-2">
              <b>
              <ul className="list-group w " style={{fontSize:'19px' }}>
                  <a className="group-item  m q" aria-current="true"></a>
                  <a className="group-item  q" ><a className='i' href='/contact'><BsFillTelephoneFill /> &ensp;1800 102 1800 </a></a>
                  <a className="group-item  q"><a className='i' href='/email'>contact@carloan.co.in</a></a>
                  <a className="group-item  q" ><a className='i' href='/instagram'><SiInstagram/></a></a>
                  <a className="group-item  q" ><a className='i' href='/twitter'><BsTwitter/></a></a>
                </ul>
              </b>
              </div>
             
            </div><br />
            <div>
              <p style={{ fontWeight: 'bold', color: 'black' }}>We use cookies to provide a user-friendly experience. By continuing to browse this site, you agree to the use of cookies. To view our cookie policy, click here</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Corporate