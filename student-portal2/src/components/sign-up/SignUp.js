import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";

class SignUp extends Component {
    state = {
        student : {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            telephone: '',
            age: ''
        }
    }
    signUpSubmitHandler = (event) => {
        // preventing query string from displaying on the browser
        event.preventDefault();
        axios.post('http://localhost:8080/submitStudentDetails',this.state.student)
        .then(response => {
            this.props.history.push('/thank-you');

        }).catch(error => {
            // error handling goes here
        })

    }
    signUpChangeHandler = (event) => {
       const key =  event.target.name;
       const value = event.target.value;
    // making a copy of the student object in the state
       const tempStudent = {...this.state.student};
       tempStudent[key] = value;
       this.setState( {
           student: tempStudent
       })

    }
    render() {
        return (
            <form onSubmit={this.signUpSubmitHandler} className="container-center" >
                <h1>Welcome to Infusion Tracker!</h1>
                <h2>Sign Up</h2>
                <h5 className="padding-bottom-15px">It's quick and easy</h5>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputFirstName4">First Name</label>
                        <input onChange={this.signUpChangeHandler} value ={this.state.student.firstName} required name="firstName" type="text" className="form-control" id="inputFirstName4" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputLastName4">Last Name</label>
                        <input onChange={this.signUpChangeHandler} value ={this.state.student.lastName} required name="lastName" type="text" className="form-control" id="inputLastName4" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="age">Age</label>
                        <input onChange={this.signUpChangeHandler} required value ={this.state.student.age} name ="age" type="text" className="form-control" id="age" placeholder="Age" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="telephone">Telephone</label>
                        <input onChange={this.signUpChangeHandler}  required value ={this.state.student.telephone} name="telephone" type="text" className="form-control" id="telephone" placeholder="Telephone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input onChange={this.signUpChangeHandler} required value ={this.state.student.email} name ="email" type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input onChange={this.signUpChangeHandler} required value ={this.state.student.password} name="password" type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                {/* <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                </label> */}
                    {/* </div> */}
                {/* </div> */}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

export default withRouter (SignUp);