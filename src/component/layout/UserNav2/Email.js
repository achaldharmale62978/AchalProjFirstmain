import React from 'react'
import '../../css files/layout css/user/email.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'

const Email = () => {
  return (
    <>
      <div className='e1'>
      <a class="nav-link ico" aria-current="page" href="/"><AiFillHome /></a>
          <div className='e2'>
          {/* <a class="nav-link ico" aria-current="page" href="/"><AiFillHome /></a> */}
            <h4 className='e3'>You can connect us with Email <br/>

            </h4>
            <h4 className='e3'>Company@gmail.com <AiOutlineMail/></h4>
          </div>
      </div>

    </>
  )
}

export default Email