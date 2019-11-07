import React, {Component} from 'react';
import countdown from 'countdown'
import './Modal.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Modal extends Component {
   
    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'success':
              this.confirmSite();
              NotificationManager.success('Site Added Successfully!', null, 3000) ;
              break;
            // case 'success':
            //   NotificationManager.success('Success message', 'Title here');
            //   break;
            case 'expired':
              NotificationManager.error('Site Has Expired');
              break;
            // case 'error':
            //   NotificationManager.error('Error message', 'Click me!', 5000, () => {
            //     alert('callback');
            //   });
            //   break;
          }
        };
      };


    state = {
        timer: ""
    
    }


    componentDidMount(){
        let initialDate  = new Date(this.props.selectedArea.date)
        let expireDate = new Date(initialDate)
        expireDate.setDate(initialDate.getDate()+3);
        let cooldownDate = new Date(initialDate)
        cooldownDate.setDate(initialDate.getDate()+14);

        this.setState({timer: countdown(new Date(), expireDate,countdown.DAYS| countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()})

        setInterval(
            () => this.setState({timer: countdown(new Date(), expireDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()}),
            1000
            
        )
        
        this.setState({cooldown: countdown(new Date(), cooldownDate,countdown.DAYS| countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()})
        setInterval(
            () => this.setState({cooldown: countdown(new Date(), cooldownDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()}),
            1000
            
            
        )
      

        // setInterval(
        //     () => {
        //         // if(expireDate > new Date() ){
        //             this.props.updateSelectedAreaColor()
        //         // }
        //     },
        //     3000
            
        // )

    }
  

   

   
    cancel = (event) => {
        this.props.removeLastAddedArea()
        
        
    }



    confirmSite = (event) => {
        
        this.props.beginSiteTracker()
        this.props.areasSubmitHandler()
        this.props.close()
        this.createNotification('info')
        this.timer = setTimeout(
            () => window.location.reload(false),
            3500
          )
      

        
    };
    
    
    
    render(){
        
        
        let modalMessage = (
            <div></div>

        )
        
        if (this.props.selectedArea.savedArea == true){
            modalMessage=(
                <div>
                <div className="modal-wrapper"
                    style={{
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Infusion Tracker</h3>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>

                    <div className="modal-body">
                        <p>This site will expire in:</p>
                    {   
                        this.state.timer
                    }
                    
                    
                    </div> 
                    <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>Close</button>
                    </div>
                    </div>
                    
                </div>

            )
            
        }
        else {
            modalMessage =( 
                <div>
                <div className="modal-wrapper"
                    style={{
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Infusion Tracker</h3>
                        <span className="close-modal-btn" onClick={this.cancel}>×</span>
                    </div>

                    <div className="modal-body">
                        <p>Do you want to confirm this as your current site?</p>
                    </div> 
                    <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.cancel}>Cancel</button>
                        <button className="btn-continue" onClick={this.createNotification('success')}>Confirm</button>
                    </div>
                    </div>
                </div>
                       
                   
            )
        }
        if (this.props.selectedArea.fillColor == "red"){
            modalMessage=(
                <div>
                <div className="modal-wrapper"
                    style={{
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Infusion Tracker</h3>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>

                    <div className="modal-body">
                        <p>This site is on cooldown for:</p>
                    {   
                        this.state.cooldown
                    }
                    
                    
                    </div> 
                    <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>Close</button>
                    </div>
                    </div>
                    
                </div>

            )
            
        }


        return (

            
            <div>
            
            
                    {modalMessage}
                
                    <NotificationContainer/>
                </div>
            
            
        );
    }

}

export default Modal;
