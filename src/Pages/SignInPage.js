import { useState } from 'react';
import HomeNav from '../Components/HomeNav';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [ data, setData ] = useState({
        email: "",
        password: "",
    })
   

    
    const onChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
          ...prevData,[name]:value,
         
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('UserData:', data);
      };


   const navigate = useNavigate()

   const ToSignup = () => {
     navigate("/signup")
   }
 
  return (
    <div className='Container'>
         <HomeNav />

        <h3>Login to account</h3>
        <form className='Form' id='form'>
            <section className='FormInput'>
                <label>Email <span>*</span></label>
                <input type="email" name="email"  onChange={onChange} required placeholder='Enter Email'></input>
            </section>

            <section className='FormInput'>
                <label>Password <span>*</span></label>
                <input type="password" name="password"  onChange={onChange} required placeholder='Enter password'></input>
            </section>

            <section className="FormInput">
                <button type='submit' className='Submit' onClick={handleSubmit}>Login</button>
            </section>
        </form>
        <section className='Option'>
            <p>Not yet a member?</p><span onClick={ToSignup}>Create account</span>
        </section>
    </div>
  )
}

export default SignInPage