import React from 'react'
import AccountRegistration from '../Components/AccountRegistration'
import SingIn from '../Components/SingIn'
import SignInPage from './SignInPage'


const Home = () => {

  return (
    <div className='Home'>
        <section className='Components'>
            <AccountRegistration/>
            <SingIn/>
        </section>
        <hr></hr>
        <section className='LoginPage'>
          <SignInPage />
        </section>
       
    </div>
  )
}

export default Home