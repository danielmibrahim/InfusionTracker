import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import  '/Users/Danny/Documents/Capstone/student-portal2/src/navbar-top.css'
import Settings from '../settings/Settings';

class Header extends Component {
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
            <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/sign-up">Sign Up <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about-us">About Us <span class="sr-only">(current)</span></a>
          </li>
          </ul>
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
                <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">BG Logger</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">A1C Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/settings">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/about-us">About Us</a>
          </li>
        </ul>
            )
            signInSignOutForm =(
                <div  className="form-inline mt-2 mt-md-0">
                <button onClick={this.signOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Out</button>
            </div>
            )
        }
        return (
                <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
                    <Link className="navbar-brand" to="/">Infusion Tracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            </li>
   
                                     {dropDownList}

                        </ul>
                        
                        {signInSignOutForm}
                    </div>
                </nav>
        );
    }
}

export default withRouter (Header);