import React from 'react'
import logo from '../../assects/About/logo2.jpeg'
import img1 from '../../assects/About/img1.jpeg'
import img2 from '../../assects/About/img 2.jpeg'
import img3 from '../../assects/About/img 3es.jpeg'
import img4 from '../../assects/About/img 4.jpeg'
import img5 from '../../assects/About/img 5.jpeg'
import img6 from '../../assects/About/img 6.avif'
import img7 from '../../assects/About/img 7.jpeg'

import '../css files/layout css/About.css'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
     <Navbar />
    <div className='main'>
      <div className='container '>
        <div className='row'>
          <div className=' col-4 offset-2'>
            <img src={logo} style={{ width: "40rem", height: "5rem" }} />

          </div>
          {/* <div className='col-3 '>
            <button className='btn btn-outline-success' >HDFC MILESTONES</button>
          </div> */}
          {/* <div className='col-3 '>
            <button className='btn btn-outline-success' >HDFC MILESTONES</button>
          </div> */}
          <br />
        </div><br />

        <div className="container">
          <div className="row 1">
            <div className="col-2 listop ">
              <ul className="list-group listop">
                <li className="list-group-item m" aria-current="true">An active item</li>
                <li className="list-group-item"><a  className='i' href=''>A second item</a></li>
                <li className="list-group-item"><a  className='i' href=''>A third item</a></li>
                <li className="list-group-item"><a  className='i' href=''>A fourth item</a></li>
                <li className="list-group-item"><a  className='i' href=''>And a fifth one</a></li>
                <li className="list-group-item"><a  className='' href=''>View More</a></li>
              </ul>
            </div>
            <div className="col-6 ">
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img1} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''><h5 className="card-title img0">Overview</h5>
                    <p className="card-text">know more about us, our team , our awards and credit ratings. </p>
                    </a>
                  </div>
                </div>
              </div>&ensp;
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img2} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">Invester Relations</h5>
                    <p className="card-text"> Knoe more about our financial ratings , American Depository Receipts and anuual Reports. </p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item m" aria-current="true">An active item</li>
                <li className="list-group-item"><a  className='i' href=''>A second item</a></li>
                <li className="list-group-item"><a  className='i' href=''>A third item</a></li>
                <li className="list-group-item"><a  className='i' href=''>A fourth item</a></li>
                <li className="list-group-item"><a  className='i' href=''>And a fifth one</a></li>
                <li className="list-group-item"><a  className='' href=''>View More</a></li>
              </ul>
            </div>

          </div>
          &ensp;&ensp;
          <div className="row 2">
            <div className="col-6 offset-2">
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img3} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">StakeHolders Information</h5>
                    <p className="card-text"> know more about our policies , General Body Meetings and Shareholding's  & Ownership. </p>
                  </a>
                  </div>
                </div>
              </div>&ensp;
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img4} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">News Room</h5>
                    <p className="card-text"> Get our Medi kit, read our press releases and connect with our media contacts. </p>
                  </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item m" aria-current="true">Open Accounts</li>
                <li className="list-group-item"><a  className='i' href=''> Savings Account</a></li>
                <li className="list-group-item"><a  className='i' href=''> Salary Account</a></li>
                <li className="list-group-item"><a  className='i' href=''> Current Accounts</a></li>
                <li className="list-group-item"><a  className='i' href=''>Demat Accounts</a></li>
              </ul>
            </div>
            {/* <div className="col">
              Column
            </div> */}
          </div>

          &ensp;&ensp;
          <div className="row 3">
            <div className="col-6 offset-2">
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img5} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">Careers</h5>
                    <p className="card-text">know  about  our culture, professional programs and career opportunities available. </p>
                  </a>
                  </div>
                </div>
              </div>&ensp;
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img6} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">Corporate Governance</h5>
                    <p className="card-text"> HDFC Bank recognizes the importance of good Corporate Governance . </p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item m " aria-current="true">Calculator</li>
                <li className="list-group-item"><a  className='i' href=''>Home Loan Calculator</a></li>
                <li className="list-group-item"><a  className='i' href=''>Personal Loan Calculator</a></li>
                <li className="list-group-item"><a  className='i' href=''>Bussiness Loan Calculator</a></li>
                <li className="list-group-item"><a  className='' href=''>View More</a></li>
              </ul>
            </div>

          </div>

          &ensp;&ensp;
          <div className="row 4">
            <div className="col-6 offset-2">
              <div className="card w-500 ">
                <div className=" first ">
                  <img src={img7} className="img-fluid img1 rounded-start" style={{ width: "10rem", height: "5rem" }} alt="..." />

                  <div className="card-body  img0 ">
                  <a className='i' href=''> <h5 className="card-title img0">Regulatory Disclosures</h5>
                    <p className="card-text"> Disclosure made under various circulars / guidlines . </p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item m" aria-current="true">Deposites</li>
                <li className="list-group-item"><a  className='i' href=''>Fixed Deposites</a></li>
                <li className="list-group-item"><a  className='i' href=''>Reccuring Deposites</a></li>
                {/*<li className="list-group-item"><a href=''>A fourth item</a></li>
                <li className="list-group-item"><a href=''>And a fifth one</a></li> */}
              </ul>
            </div>
            {/* <div className="col">
              Column
            </div> */}
          </div>

        </div>
      </div> <br /><br />


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
            <div className="col-2">
              <ul className="list-group lis2">
                <a className="group-item lis2 m" aria-current="true">Connect</a>
                <a className="group-item lis2" ><a className='i' href=''> FaceBook</a></a>
                <a className="group-item lis2"><a className='i' href=''>YouTube</a></a>
                <a className="group-item lis2"><a className='i' href=''>Instagram</a></a>
                <a className="group-item lis2"><a className='i' href=''>Twitter</a></a>
              </ul>
            </div>
          </div><br />
          <div>
            <p style={{fontWeight:'bold', color:'black'}}>We use cookies to provide a user-friendly experience. By continuing to browse this site, you agree to the use of cookies. To view our cookie policy, click here</p>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default About