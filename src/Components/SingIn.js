import {faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SingIn = () => {
  return (
    <div>
       <section>
            <button className='Btn'>
                <h2 className='BtnText'>Sign In</h2>
                <FontAwesomeIcon icon={faUserTie} />
            </button>
        </section>
    </div>
  )
}

export default SingIn