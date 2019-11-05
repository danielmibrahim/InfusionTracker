import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import img1 from '/Users/Danny/Documents/Capstone/student-portal2/src/images/img1.jpeg';
import  '/Users/Danny/Documents/Capstone/student-portal2/src/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import Button from 'react-bootstrap/Button'
import img2 from '/Users/Danny/Documents/Capstone/student-portal2/src/images/img2.jpg'
import '/Users/Danny/Documents/Capstone/student-portal2/src/index.css';
import img3 from '/Users/Danny/Documents/Capstone/student-portal2/src/images/img3.jpg';
import img4 from '/Users/Danny/Documents/Capstone/student-portal2/src/images/img4.jpg';
import img5 from '/Users/Danny/Documents/Capstone/student-portal2/src/images/img5.jpg';

class LogIn extends Component {
  state = {
      student: {
          email: '',
          password: ''
      }
  }



signInSubmitHandler = (event) => {
  event.preventDefault();
  const student = { email: this.state.email, password: this.state.password }
  axios.post("http://localhost:8080/login", student).then(response => {
      //storing the user's data inside the browser for future use 
      const loginStudent = response.data.email;
      localStorage.setItem("loggedInStudent", loginStudent);
      //navigate to home page 
      this.props.history.push('/');
  }).catch(error => {
      alert('Invalid Credentials');    });
}

signInChangeHandler = (event) => {
  const key = event.target.name;
  const value = event.target.value;
  this.setState(
      {
          [key]: value
      }
  )
}
signOut = () => {
  localStorage.removeItem("loggedInStudent");
  window.location.reload(false)

}

  render() {
      let dropDownList = (
          <li className="nav-item ">
              <Link className="nav-link" to="/sign-up">Sign Up  </Link>
          </li>
      )
      let signInSignOutForm = (
          <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0">
              <input onChange={this.signInChangeHandler} value={this.state.email} name="email" className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" />
              <input onChange={this.signInChangeHandler} value={this.state.password} name="password" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
          </form>
      )
      if(localStorage.getItem('loggedInStudent')){
          dropDownList = (
              <li className="nav-item ">
                  <Link className="nav-link" to="/settings">Settings  </Link>
              </li>
          )
          signInSignOutForm =(
              <div  className="form-inline mt-2 mt-md-0">
              <button onClick={this.signOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Out</button>
          </div>
          )
      }

     

      return (
        
     <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators" data-interval="5000">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>        
          <div className="carousel-inner">
            <div className="carousel-item active" >
              
            <img src={img4} fluid alt="First slide"></img>
              <div classNameName="container">
                <div className="carousel-caption text-left">
                  <div className="heading">Welcome to Infusion Tracker</div>
                  
                 <br></br><br></br><br></br><br></br>
                 <h1>No more struggling to remember!</h1>
                 
                 <p>Gone are the days of wondering if your site is ready for use</p>
                 <br></br><br></br><br></br><br></br><br></br>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3}></img>
              <div className="container">
                <div className="carousel-caption">
                <h1>Let Infusion Tracker do the work for you</h1>
                <p>Our app is designed to handle the stress of site rotations</p>
                  
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img  src={img5}></img>
              <div className="container">
                <div className="carousel-caption text-right">
                <h1>Get Started Here</h1>
                 <p> <Button size="lg" href="sign-up">Sign Up</Button></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
  }
 
}



export default withRouter (LogIn);


