import React from 'react'
import '../css files/layout css/Home.css'
import Navbar from './Navbar'

import img1 from '../././../assects/Home/AutoLoan.jpg'
import img2 from '../././../assects/Home/2m18baf.jpg'
import img3 from '../././../assects/Home/vintage-sport-car-vector-logo-template_293731-604 .avif'
import img4 from '../././../assects/Home/images1.jpeg'
import img5 from '../././../assects/Home/web-design-preview-56264.jpg'
import img6 from '../././../assects/Home/garage-auto-service-website-template-design-c90080057b79d3fe5b8470db7560a381_screen.jpg'
import img7 from '../././../assects/Home/tiago-nrg-web.jpg'
import img8 from '../././../assects/Home/-FJPG-C3492x1964,304,0-S3200x1800-S1600x900.jpeg'
import img9 from '../././../assects/Home/49476320_524701201686631_4023611438332379136_n.jpg'
import img10 from '../././../assects/Home/car_rental_website_transition.png'


import { BiMoneyWithdraw } from 'react-icons/bi'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { TbCalendarDollar } from 'react-icons/tb'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'



const Home = () => {
  return (
    <>
      <Navbar />
      <div className='first '>
        <div className='two'>
          
          <img src={img1} alt='' className='i11' />
           
          <button type='submit' className='btn btn-outline-secondary col-2 offset-2' style={{marginTop:'5px',fontWeight:'bold'}}>BUY LOAN</button>&ensp;
          <button type='submit' className='btn btn-outline-success col-2'style={{marginTop:'5px',fontWeight:'bold'}}>VIEW MORE</button>
            

          <div class="card mb-3" style={{ maxwidth: " 540px;", textAlign: 'center', padding: '10px',border:'none' }}>
            <div class="row g-0">
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Car Loan-EMI, Compare Interest Rates for Auto Loans-CarWale</h5>
                  <p class="card-text"></p>
                  <p class="card-text"><small class="text-muted">Get instant car loan eligibility with upto 100% financing from leading banks at best Interest Rates,<br />
                    EMI for your new car and used car purchase. CarWale brings car finance at your fingertips with
                    attractive bank offers for your dream</small></p>
                </div>
              </div>
              <div class="col-md-6">
                <img src={img2} class="img-fluid rounded-start" alt="..." style={{ height: '90%' }} />
              </div>
            </div>
          </div>
          

          <div className='three'>
            <div class="container">
              <b className='m1'>Feature and Benefits</b>&ensp;
              <div class="row rr i3">
                <div class="col-3 order-last i3 offset-1 border rounded-pill">
                  <p style={{ fontSize: '40px' ,color:'blue',borderradiuspill:'50rem;,',borderWidth:'20px'}}>< TbCalendarDollar /> </p><p className='t6'>Loan upto 100% of On-Road Price</p>
                </div>
                <div class="col-3 offset-1 i3 border rounded-pill">
                  <p style={{ fontSize: '40px',color:'blue ',borderradiuspill:'50rem;' }}><FaHandHoldingDollar /></p><p className='t6'>Attractive Intrest Rate</p>
                </div>
                <div class="col-3 order-first i3 border rounded-pill">
                  <p style={{ fontSize: '40px',color:'blue' ,borderradiuspill:'50rem;'}}>< BiMoneyWithdraw /></p><p className='t6'>Loan upto 100% of On-Road Price</p>
                </div>
              </div>

             
              <p class="lead" >
              <center>  <b style={{ fontSize: "30px", fontWeight: 'bold' }}> Car Loan EMI Calculator</b><br />
                EMIs make your loan repayment much easier and a peaceful process but a car loan EMI is somewhat capable of making a dent in your monthly budget. Therefore, you need to calculate the EMI amount ahead of time to ensure that you can actually afford to take a loan for the desired amount. Our user-friendly CarWale car loan EMI calculator instantly provides you with the monthly amount you would be required to pay based on the loan amount, term and interest rate provided by you
                </center> </p>
             
                <div class="card-group border-0" style={{border:'none'}}>
                <div class="card">
                  <img src={img3} class="card-img-top border-0" alt="..."/>

                </div>&ensp;
                <div class="card">
                  <img src={img4} class="card-img-top" alt="..."/>
                    
                </div>&ensp;
                <div class="card">
                  <img src={img5} class="card-img-top" alt="..."/>
                    
                </div>&ensp;
                <div class="card">
                  <img src={img6} class="card-img-top" alt="..."/>
                    
                </div>
              </div>
              <div class="card-group" style={{border:'none'}}>
                <div class="card">
                  <img src={img7} class="card-img-top" alt="..."/>
                  
                </div>&ensp;
                <div class="card">
                  <img src={img8} class="card-img-top" alt="..."/>
                    
                </div>&ensp;
                <div class="card">
                  <img src={img9} class="card-img-top" alt="..."/>
                    
                </div>&ensp;
                <div class="card">
                  <img src={img10} class="card-img-top" alt="..."/>
                    
                </div>
              </div>
              
            </div>


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
                      <ul className="list-group w " style={{ fontSize: '19px' }}>
                        <a className="group-item  m q" aria-current="true"></a>
                        <a className="group-item  q" ><a className='i' href='/contact'><BsFillTelephoneFill /> &ensp;1800 102 1800 </a></a>
                        <a className="group-item  q"><a className='i' href='/email'>contact@carloan.co.in</a></a>
                        <a className="group-item  q" ><a className='i' href='/instagram'><SiInstagram /></a></a>
                        <a className="group-item  q" ><a className='i' href='/twitter'><BsTwitter /></a></a>
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
        </div>
      </div>


    </>
  )
}

export default Home