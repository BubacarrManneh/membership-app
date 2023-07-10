import { useState } from 'react';
import HomeNav from '../Components/HomeNav';

const SignInPage = () => {
    const [ data, setData ] = useState({
        email: "",
        password: ""
    })
   

   const onChange = (e) => {
        setData(console.log(e.target.value))
   }

 
  return (
    <div className='Container'>
         <HomeNav />

        <h3>Login to account</h3>
        <form className='Form' id='form'>
            <section className='FormInput'>
                <label>Email <span>*</span></label>
                <input type="email" onChange={onChange} required placeholder='Enter Email'></input>
            </section>

            <section className='FormInput'>
                <label>Password <span>*</span></label>
                <input type="password" onChange={onChange} required placeholder='Enter password'></input>
            </section>

            <section className="FormInput">
                <button type='submit' className='Submit' >Login</button>
            </section>
        </form>
        <section className='Option'>
            <p>Not yet a member?</p><span>Create account</span>
        </section>
    </div>
  )
}

export default SignInPage