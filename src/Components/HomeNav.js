import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'

const HomeNav = () => {
  
  const navigate = useNavigate()
  const Home = () => {
      navigate("/")
  }
  return (
    <div>
        <section className='Components'>
            <button to={"/"} className='Btn' onClick={Home}>
                <h2 className='BtnText'>Home</h2>
                <FontAwesomeIcon icon={faHome } />
            </button>
        </section>
        <hr />
    </div>
  )
}

export default HomeNav