import React from 'react'
import '../../../css files/layout css/user/irate.css'
import { GiBanknote } from 'react-icons/gi'
import { BiRupee } from 'react-icons/bi'
import { PiDotOutlineFill } from 'react-icons/pi'


const Irate = () => {
    return (
        <>
            <div className='ir1 '>

                <div className='r1'>
                    <nav class="nav r2" >
                        <a className='nav-link lo1'> <GiBanknote /></a>&ensp;&ensp;
                        <a class="nav-link u1" aria-current="page" href="/">Home</a>
                        <a class="nav-link u1" href="/loan">loan</a>
                        <a class="nav-link u1" href="/services">Services</a>
                        <a class="nav-link u1 " href='/paybills'>Pay Bills</a>&ensp;
                        {/* <li class="nav-item nf">
                            <a class="nav n2 n " aria-current="page" href="/irate"><BsBank />
                            </a>
                            <div className='f' >Attractive  <br />Intrest Rate</div>
                        </li> */}
                    </nav>
                </div>
                <div className='container'>
                    <div className='ir2 col-8 offset-1 '>

                        <h5>Intrest Rate</h5>
                        <div>
                            <p>Calculate the Monthly Intrest Payable and plans for your loan Repayment with ease . &ensp;&ensp;
                                <a href="/" class="btn btn-outline-light c  ">Apply</a>
                            </p>
                        </div>

                    </div>
                    <div className='container'>
                        <div class="row align-items-start">
                            <div className='ir3 col-7'>

                                <h5>Calculate Your Intrest Rate</h5>
                                <p>Instantly calculate the monthly Intrest payable on your loan .</p>
                                <h6>Loan Type</h6>
                                <div class="btn- bt1" role="group" aria-label="Basic mixed styles example">
                                    <a type="button" href='' class="btn btn-light active bt2">Personal</a>&ensp;&ensp;
                                    <a type="button" href='' class="btn btn-light active bt2">Car</a>&ensp;&ensp;
                                    <a type="button" href='' class="btn btn-light active bt2">Bussiness</a>
                                </div>

                                <div>
                                    <form>
                                        <label for="customRange1" class="form-label">Loan Amount(in rupees) </label>
                                        <div className='form-group'>
                                            <label for="customRange1" class="form-label" style={{ textDecoration: 'underline', paddingLeft: '500px', fontWeight: '100px' }}>20,000 </label>
                                            <input type="range" class="form-control-range in1 col-11" ></input>
                                            <label className='card-subtitle text-muted'>20k  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;8L &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;16L&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                                24L&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;40L</label><br /><br />

                                            <label for="customRange1" class="form-label">Intrest Rate ( % ) </label>
                                            <label for="customRange1" class="form-label" style={{ textDecoration: 'underline', paddingLeft: '500px', fontWeight: '100px' }}>11.00 </label>
                                            <input type="range" class="form-control-range in1 col-11" ></input>
                                            <label className='card-subtitle text-muted'>11  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;17 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;23&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                                29&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;35</label><br /><br />

                                            <label for="customRange1" class="form-label">Tenure ( in months ) </label>
                                            <label for="customRange1" class="form-label" style={{ textDecoration: 'underline', paddingLeft: '500px', fontWeight: '100px' }}>12 </label>
                                            <input type="range" class="form-control-range in1 col-11" ></input>
                                            <label className='card-subtitle text-muted'>6 &emsp;&emsp;&emsp;&emsp;&emsp;24 &emsp;&emsp;&emsp;&emsp;&emsp;42&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                                60&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;78 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;96</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='ir4 col-5'>
                                <div class="card im " style={{ width: "18rem;" }}>
                                    <div class="card-body">
                                        <h5 class="card-title"></h5>
                                        <h6 class="card-subtitle mb-2 ">Your EMI is</h6>
                                        <h3 class="card-text" style={{ fontFamily: 'inherit', fontSize: '40px' }}> <BiRupee />1,768</h3>
                                        <hr />
                                        <div style={{ paddingTop: '30px' }}>
                                            <h6 class="card-subtitle mb-2 te2"><b>Total Intrest</b> <br /><BiRupee /> 1,212</h6> <br />
                                            <h6 class="card-subtitle mb-2 te3 "><b>Total Amount Payable</b><br /> <BiRupee /> 21,212</h6>
                                        </div>

                                        <div className='as'>
                                            <a href="" class="card-link al">View repayment Schedule</a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <a href="" class="card-link al">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />


                    <div className='ir5 ' style={{ backgroundColor: 'white', padding: '20px' }}>
                        <h5>About Intrest Rate Calculator</h5>
                        <p>With the help of our loan intrest calculator, your monthly instrest calculation can be done effortlessly. You get to know exactly how much you are liable to as intrest
                            throughout the <span style={{ color: 'orange' }}> loan tenure .</span>
                            Enter a few relevent details about the credit you need and acquire in-depth information regarding EMI , total intrest payable and more.

                        </p>
                        <h6>Steps to use the intrest and calculator</h6>
                        <p>
                            The online monthly intrest calculator ensure quick computaion of intrest and EMIs. Using a loan intrest rate calculator is simple , with the interface being user-friendly.
                            Here is how to use and intrest rate calculator in three simple stapes :
                        </p>
                        <p>
                            <PiDotOutlineFill /> Enter the loan amount you want to avail.<br />
                            <PiDotOutlineFill /> Next, Enter the rate of intrest on your loan.<br />
                            <PiDotOutlineFill /> Select the repayment period you wish to opt for and greate accurate results instantly.
                        </p>

                        <h6>The formula for intrest calculation</h6>
                        <p>
                            EMI is calculated using the below formula :-
                        </p>
                        <h6>EMI = P*R*(1+R)^N[(1+R)^N-1]</h6>
                        <p>Here,</p>
                        <p>
                            <b>p -</b> Principal loan amount
                        </p>
                        <p>
                            <b>R -</b> Rate of Interest(monthly)
                        </p>
                        <p>
                            <b>N -</b> Tenure(months)
                        </p>

                        <p>
                            For instance, Riya took a <span style={{ color: 'orange' }}>personal loan of Rs. 1,00,000</span>
                            at an intrest rate of 15% p.a. for a tenure of 12 months.
                            Here,Riya's annual intrest payable will be around Rs.8,310, and her monthly EMI will be around Rs.9,026.
                        </p>
                        <h6>Types of intrest rates</h6>
                        <p>
                            The two primary <span style={{ color: 'orange' }}>caragories of intrest rates </span>
                            are simple intrest rates and compound intrest rates. <span style={{ color: 'orange' }}>Simple intrest,</span> on the other hand, takes into account both the principal and any accumulates intrest,resulting in
                            intrest being earned on the initial amount as well as on the priviously earned intrest.
                        </p>

                    </div>

                    <div className='ir6 ' style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px' }}>
                        <h6>Disclimer</h6>
                        <p>
                            Results genrated by the calculator(s) are indicative in nature. The intrest rate applied on the loan will depend on the prevailing rates at the time of loan booking.

                        </p>
                        <a className='card-link al' href=''>Read more</a>
                    </div>

                </div>
                <div className='ir1'>
                    <hr /><hr />
                </div>
            </div>



            <div className='con'>
                {/* <hr /> */}
                <div className="container ">
                    <div className="row con">
                        <div className="col-2 ">
                            <ul className="list-group lis2 ">
                                <a className="group-item  lis2 m" aria-current="true">Application Form</a>
                                <a className="group-item  lis2"><a className='i' href=''>Personal Loan</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Home Loan</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Credit Card</a></a>
                                <a className="group-item lis2">< a className='i' href=''>Instant EMI Card</a></a>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul className="list-group lis2">
                                {/* <a className="group-item lis2 m" aria-current="true">Usefull Links</a> */}
                                <a className="group-item lis2"><a className='i' href=''>Health Insureance</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Fixed Deposit</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Loan for Chartered Accountants</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Used Car Finance</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Car Loan Balance Transfer and Top-up</a></a>
                            </ul>
                        </div>
                        <div className="col-2">
                            <ul className="list-group lis2">
                                {/* <a className="group-item lis2 m" aria-current="true"> Resources </a> */}

                                <a className="group-item lis2"><a className='i' href=''>Bussiness Loan</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Gold Loan</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Bajaj Finserv DBS Bank credit card</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Wallet Care</a></a>

                            </ul>
                        </div>
                        <div className="col-2">
                            <ul className="list-group lis2">
                                {/* <a className="group-item lis2 m" aria-current="true">Calculators</a> */}
                                <a className="group-item lis2"><a className='i' href=''>Loan for Doctors</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Open Demat Account</a></a>
                                <a className="group-item lis2"><a className='i' href=''>New CCar Finance</a></a>
                                <a className="group-item lis2"><a className='i' href=''>Mutual Fund</a></a>
                            </ul>
                        </div>


                    </div><br />
                    <hr />
                    <div className="col-2">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b style={{ fontSize: '18px' }}>Calculators</b></a>

                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            {/* <a className="group-item lis2 m" aria-current="true">Calculators</a> */}
                            <a className="dropdown-item lis2"><a className='i' href=''>Fixed Deposites</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Reccuring Deposites</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>A fourth item</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>And a fifth one</a></a>
                        </ul>

                    </div>
                    <hr />
                    <div className="col-2">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b style={{ fontSize: '18px' }}>Legal</b></a>

                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            {/* <a className="group-item lis2 m" aria-current="true">Calculators</a> */}
                            <a className="dropdown-item lis2"><a className='i' href=''>Privacy Policy</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Disclimer</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Confidencial Feedback</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Intrest Rate Policy</a></a>
                        </ul>

                    </div>
                    <hr />
                    <div className="col-2">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b style={{ fontSize: '18px' }}>Reech Us</b></a>

                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            {/* <a className="group-item lis2 m" aria-current="true">Calculators</a> */}
                            <a className="dropdown-item lis2"><a className='i' href=''>6th floor Bajaj Finserv <br />
                                Corporate Office, Off Pune<br />
                                _Ahemednagar Road,<br />
                                Viman Nagar,<br />Pune - 411012
                            </a></a>
                            <a className="group-item lis2 m" aria-current="true">Our Companies</a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Bajaj Finserv Ltd.</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>Bajaj Finance Ltd.</a></a>
                            <a className="dropdown-item lis2"><a className='i' href=''>And a fifth one</a></a>
                        </ul>

                    </div>

                    
                    <hr />
                    <div>
                        <p style={{ fontWeight: 'bold', color: 'black' }}>We use cookies to provide a user-friendly experience. By continuing to browse this site, you agree to the use of cookies. To view our cookie policy, click here</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Irate