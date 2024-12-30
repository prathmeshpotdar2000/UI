import './App.css';
import React from 'react';

export default class Register extends React.Component{
  render(){
    return(
      <>
      <div className="App">
     <input type="text" name="s" placeholder="Enter your name" value=""/> <br></br>
     <input type="text" name="s" placeholder="Enter your Email" value=""/><br></br>
     <input type="text" name="s" placeholder="Enter your Contact" value=""/> <br></br>
     <input type="text" name="s" placeholder="Enter your Qualification" value=""/> <br></br>
     <input type="text" name="s" placeholder="Enter your Age" value=""/> <br></br>
     <input type="button" name="s"  value="Register"/>
     <div className="log">
      <a href="#">Have You Already Registered?</a>
     </div>
    </div>
      </>
    )
  }
}

// export default Register;
