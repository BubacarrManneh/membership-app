import React from 'react'

const SignInPage = () => {
  return (
    <div className='Container'>
        <h1>Login to account</h1>
        <form className='Form'>
            <section className='FormInput'>
                <label>Email <span>*</span></label>
                <input required type="email" placeholder='Enter Email'></input>
            </section>

            <section className='FormInput'>
                <label>Password <span>*</span></label>
                <input type="password" required placeholder='Enter password'></input>
            </section>

            <section className="FormInput">
                <button type='submit' className='Submit'>Login</button>
            </section>
        </form>
    </div>
  )
}

export default SignInPage