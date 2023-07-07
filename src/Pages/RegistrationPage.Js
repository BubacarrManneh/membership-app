import React from 'react'

const RegistrationPage = () => {
  return (
    <div className='Container'>
        <h1>Become a member</h1>
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
                <input required type="password" placeholder='Confirm Passtword'></input>
            </section>

            <section className="FormInput">
                <button className='Submit'>Register</button>
            </section>
        </form>
    </div>
  )
}

export default RegistrationPage