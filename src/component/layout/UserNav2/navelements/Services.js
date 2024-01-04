import React from 'react'
import '../../../css files/layout css/user/services.css'
import { GiBanknote } from 'react-icons/gi'

const Services = () => {
    return (
        <>
            <div className=''>
                <div className='r1'>
                    <nav class="nav r2" >
                        <a className='nav-link lo1'> <GiBanknote /></a>&ensp;&ensp;
                        <a class="nav-link u1" aria-current="page" href="/">Home</a>
                        <a class="nav-link u1" href="/loan">loan</a>
                        <a class="nav-link u1" href="/services">Services</a>
                        <a class="nav-link u1 " href='/paybills'>Pay Bills</a>&ensp;

                    </nav>
                </div>
                <div className='s1 '>
                    <div className='container'>
                        <div className='s2 col'>
                            <h2>Our Bundle Of Service Guides</h2>
                            <p> 
                                Learn about the bajaj finserv services and manage your loan,card,Deposits and more on our customer portal - My Account.
                            </p>
                        </div>
                        <div className='s3'>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services