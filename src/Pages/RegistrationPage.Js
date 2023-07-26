import { useNavigate } from 'react-router-dom'
import HomeNav from '../Components/HomeNav'

const RegistrationPage = () => {
    
    const navigate = useNavigate()

    const ToSignin = (() => {
        navigate("/signin")
    })
  return (
    <div className='Container'>
        <HomeNav />

        <h3>Become a member</h3>
        <form className='Form'>
            
            <section className='FormInput'>
                <label>First Name</label>
                <input type="text" placeholder='Enter first name'></input>
            </section>

            <section className='FormInput'>
                <label>Last Name</label>
                <input type="text" placeholder='Enter last name'></input>
            </section>

            <section className='FormInput'>
                <label>Email <span>*</span></label>
                <input required type="email" placeholder='Enter email'></input>
            </section>

            <section className='FormInput'>
                <label>Password <span>*</span></label>
                <input type="password" required placeholder='Enter password'></input>
            </section>

            <section className='FormInput'>
                <label>Confirm Passtword <span>*</span></label>
                <input required type="password" placeholder='Confirm Password'></input>
            </section>

            <section className="FormInput">
                <button className='Submit'>Register</button>
            </section>
        </form>
        <section className='Option'>
            <p>Already a member?</p><span onClick={ToSignin}>Sign In</span>
        </section>
    </div>
  )
}

export default RegistrationPage