import {faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingIn = () => {

  return (
    <>
       <section>
            <button className='Btn'>
                <h2 className='BtnText'>Sign In</h2>
                <FontAwesomeIcon icon={faUserTie} />
            </button>
        </section>
    </>
  )
}

export default SingIn