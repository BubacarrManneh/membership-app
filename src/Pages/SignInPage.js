import React from 'react'

const SignInPage = () => {
  return (
    <div className='Register'>
        <h1>Become a member</h1>
        <form className='Form'>
            <section className='FormInput'>
                <label>Username</label>
                <input placeholder='Choose a username'></input>
            </section>

            <section className='FormInput'>
                <label>First Name</label>
                <input placeholder='Enter first name'></input>
            </section>

            <section className='FormInput'>
                <label>Last Name</label>
                <input placeholder='Enter last name'></input>
            </section>

            <section className='FormInput'>
                <label>Email</label>
                <input placeholder='Enter email'></input>
            </section>

            <section className='FormInput'>
                <label>Pastword</label>
                <input placeholder='Enter password'></input>
            </section>
            <button className='LoginBtn'>Register</button>
        </form>
    </div>
  )
}

export default SignInPage