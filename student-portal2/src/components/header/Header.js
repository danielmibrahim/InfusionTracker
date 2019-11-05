import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


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
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to="/">Infusion Tracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about-us">About-us <span className="sr-only">(current)</span></Link>
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