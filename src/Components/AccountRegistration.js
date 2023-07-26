import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountRegistration = () => {

  const navigate = useNavigate()

  const Register = (() => {
    navigate("/signup")
  })
  return (
    <>
        <section>
            <button onClick={Register} className='Btn'>
              <h2 className='BtnText'>Sign Up</h2>
              <FontAwesomeIcon icon={faUserPlus}/>  
            </button>
        </section>
    </>
  )
}

export default AccountRegistration