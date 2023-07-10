import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AccountRegistration = () => {
  return (
    <>
        <section>
            <button className='Btn'>
                <h2 className='BtnText'>Sign Up</h2>
                <FontAwesomeIcon icon={faUserPlus}/>
            </button>
        </section>
    </>
  )
}

export default AccountRegistration