import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import StudentLife from './student-life/student-life/StudentLife';
import Header from '../header/Header';
import Body from '../body/Body';

class Home extends Component {
    state = {
        student:{}
    }
    componentDidMount() {
       const params = {
           email: localStorage.getItem('loggedInStudent')
         
       }
        axios.get('http://localhost:8080/findByEmail',{params})
        .then(response => {
            this.setState(
                {
                    student: response.data
                }
            )
        })

        
    }

    render() {
        return (
            <div className="site-wrapper">
        
                
                       <br></br>
                        <h1 className="container-center">{this.state.student.firstName}'s Profile
                        <Body/></h1> 
                    
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        );
    }
}

export default Home;