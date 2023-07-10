import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const HomeNav = () => {
  
  return (
    <div>
        <section className='Components'>
            <button className='Btn'>
                <h2 className='BtnText'>Home</h2>
                <FontAwesomeIcon icon={faHome } />
            </button>
        </section>
        <hr />
    </div>
  )
}

export default HomeNav