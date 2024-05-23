import { useState } from 'react';
import './Login.css'

import logo from '../../assets/logo.PNG'





function Login() {
  

  const [username, setUsername]=useState('')
const [password, setPassword]=useState('')
function onUsernameChange($event)
{
  setUsername($event.target.value)
}

function onPasswordChange($event)
{
  setPassword($event.target.value)
}

function onLoginClick(){
 //fetch

}
  return ( <div className='login mt-5 container-fluid text-center'>
    <div className='mb-3' >
      <img src={logo} style={{width:200, height:200}}></img>

    </div>
  <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" onChange={onUsernameChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" onChange={onPasswordChange}/>
    </div>
  </div>
 
    
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check ">
        <input className="form-check-input " type="checkbox" id="gridCheck1"/>
        <label className="form-check-label " for="gridCheck1">
          Remember Me!
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-dark" onClick={onLoginClick}>Login</button>
</form>
</div> )
}

export default Login;