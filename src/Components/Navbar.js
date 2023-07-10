import React from 'react'
import AccountRegistration from '../Components/AccountRegistration';
import SignIn from './SignIn';

const Navbar = () => {
  return (
    <>
      <div className='Components'>
        <AccountRegistration />
        <SignIn />
      </div>
      <hr></hr>
    </>

  )
}

export default Navbar