import React, { Component } from 'react';
import axios from 'axios';

class StudentLife extends Component {
    state ={
        students: []
    }
    componentDidMount() {
        axios.get('http://localhost:8080/findAll')
        .then(response => {
            this.setState(
                {
                    students: response.data
                }
            )
        })
    }
    render() {
        return (
               this.state.students.map( (student, index ) =>  <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{student.firstName} {student.lastName}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Telephone: {student.telephone}</li>
                        <li className="list-group-item">Age: {student.age}</li>
                        <li className="list-group-item">StudentId: {student.studentId}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
            </div>
            )
        );
            }
        }
        
export default StudentLife; 