import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AccountRegistration = () => {
  return (
    <div>
        <section>
            <button className='Btn'>
                <h2 className='BtnText'>Sign Up</h2>
                <FontAwesomeIcon icon={faUserPlus}/>
            </button>
        </section>
    </div>
  )
}

export default AccountRegistration