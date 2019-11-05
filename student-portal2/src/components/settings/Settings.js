import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (

            <div className="site-wrapper ">
                        

                <form className="container">
                    <h1>Edit Information</h1>
                   
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputFirstName4">Height</label>
                            <input type="text" className="form-control" id="Height" placeholder="Height" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputFirstName4">Weight</label>
                            <input type="text" className="form-control" id="Weight" placeholder="Weight" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputFirstName4">Age</label>
                            <input type="text" className="form-control" id="Age" placeholder="Age" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputFirstName4">Phone</label>
                            <input type="text" className="form-control" id="Phone" placeholder="Phone" />
                        </div>
                       
                 
                    </div>
                 
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                </form>
                </div>
                
        );
    }
}

    
       
    
    
export default Settings;