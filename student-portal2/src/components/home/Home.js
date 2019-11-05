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
            
            <div className="container-fluid home-margin-top-less-200px">
            <div className="row">
                
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                            <br></br><br></br><br></br><br></br>
                                <a className="nav-link active" href='/' to="/home/dashboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                    BG Logger
                                 </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    A1C Calculator
                                 </a>
                            </li>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                           
                       </ul>
                       
                       </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-1"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div></div></div>
                       <br></br>
                        <h1 className="container-center">{this.state.student.firstName}'s Profile</h1> 
                       
                    

                    <Body/>

                        
    
                
                    <Route path='/home/student-life' component={StudentLife} />
                    
                </main>
               
            </div>
            <Header/>
        </div>
        
        );
    }
}

export default Home;