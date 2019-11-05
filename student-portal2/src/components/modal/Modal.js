import React, {Component} from 'react';
import countdown from 'countdown'
import './Modal.css';


class Modal extends Component {

    state = {
        timer: ""
    }

    componentDidMount(){
        let initialDate  = new Date(this.props.selectedArea.date)
        let expireDate = new Date(initialDate)
        expireDate.setDate(initialDate.getDate()+3);
        this.setState({timer: countdown(new Date(), expireDate,countdown.DAYS| countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()})

        setInterval(
            () => this.setState({timer: countdown(new Date(), expireDate, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()}),
            1000
        )
    }

    handleChangeColor = (newColor) => {
        this.props.selectedArea.fillColor({
          fillColor: newColor
        })
      }

      componentDidMount() {
        
        this.timer = setTimeout(
          () => this.handleChangeColor("red"),
          1000*3 // in milliseconds, 3s for fast show
        )
      }

    cancel = (event) => {
        this.props.removeLastAddedArea()
    }

    

    confirmSite = (event) => {
        this.props.beginSiteTracker()
        this.props.areasSubmitHandler()
        this.props.close()

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
                        <button className="btn-continue" onClick={this.confirmSite}>Confirm</button>
                    </div>
                    </div>
                </div>
                       
                   
            )
        }


        return (
            <div>
            
                    {modalMessage}
                
                    
                </div>
            
        );
    }

}

export default Modal;
