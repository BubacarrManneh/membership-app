import { useNavigate } from 'react-router-dom'
import HomeNav from '../Components/HomeNav'
import { useState } from 'react'

const RegistrationPage = () => {
    const [userData, SetUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: ""

    })
    
    
    
    const RegisterUser = ((e) => {
        e.preventDefault()
        const {name, value} = e.target
        SetUserData((userData) =>({
            ...userData,[name]: value
        }))
    })

    const FormSubmit = ((e) => {
        e.preventDefault();
       
        console.log("User Info", userData)
    })

    const navigate = useNavigate()

    const ToSignin = (() => {
        navigate("/signin")
    })
  return (
    <div className='Container'>
        <HomeNav />

        <h3>Become a member</h3>
        <form className='Form' onSubmit={FormSubmit}>
            
            <section className='FormInput'>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={RegisterUser} placeholder='Enter first name'></input>
            </section>

            <section className='FormInput'>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={RegisterUser}  placeholder='Enter last name'></input>
            </section>

            <section className='FormInput'>
                <label>Email <span>*</span></label>
                <input required type="email" name="email" onChange={RegisterUser} placeholder='Enter email'></input>
            </section>

            <section className='FormInput'>
                <label>Password <span>*</span></label>
                <input type="password" required name="password1" onChange={RegisterUser} placeholder='Enter password'></input>
            </section>

            <section className='FormInput'>
                <label>Confirm Passtword <span>*</span></label>
                <input required type="password" name="password2" onChange={RegisterUser} placeholder='Confirm Password'></input>
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