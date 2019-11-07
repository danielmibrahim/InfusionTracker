import React, { Component } from 'react';
import Header from '../header/Header';
import SignUp from '../sign-up/SignUp';
import {Route} from 'react-router-dom';
import AboutUs from '../about-us/AboutUs';
import Home from '../home/Home';
import {withRouter} from 'react-router-dom';
import StudentLife from '../home/student-life/student-life/StudentLife';
import Body from '../body/Body';
import Test from '../test/Test';
import ThankYou from '../thank-you/ThankYou' 
import Settings from '../settings/Settings';
import Homepage from '../homepage/Homepage';

class Layout extends Component {
    render() {
         //variable that allows different routes based on user's session
         let routes = (
            <React.Fragment>
            <Route exact path = "/" component = {Homepage} />
            <Route path = "/homepage" component = {Homepage} />

            </React.Fragment>
        );
        if(localStorage.getItem("loggedInStudent")){
            routes = (
                <React.Fragment>
                    <Route exact path = "/" component = {Home}  />
                </React.Fragment>
            )
     }
        return (
            <div>
                <Header {...this.props} />
                {routes}
               
                <Route path="/sign-up" component={SignUp} />

                <Route path="/about-us" component={AboutUs} />
                <Route path="/student-life" component={StudentLife} />
                <Route path ="/body" component={Body}/>
                <Route path ="/test" component={Test}/>
                <Route path ="/thank-you" component={ThankYou}/>
                <Route path ="/settings" component={Settings}/>
                <Route path ="/homepage" component={Homepage}/>


                
            </div>
        );
    }
}

export default withRouter(Layout);