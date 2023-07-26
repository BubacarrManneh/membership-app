import {faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const SingIn = () => {
  
  const navigate = useNavigate()

  const Signin = (() => {
    navigate("/signin")
  })
  return (
    <>
       <section>
            <button className='Btn' onClick={Signin}>
                <h2 className='BtnText'>Sign In</h2>
                <FontAwesomeIcon icon={faUserTie} />
            </button>
        </section>
    </>
  )
}

export default SingIn