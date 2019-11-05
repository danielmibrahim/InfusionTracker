import React from 'react';
import './Modal.css';

import Timer  from 'react-compound-timer';



const TimerModal = (props) => {

    let cancel = (event) => {
        props.removeLastAddedArea()
    }


    let confirmSite = (event) => {
        props.beginSiteTracker()
        props.areasSubmitHandler()
        props.close()

    };

    console.log("Timer props -> ", props.selectedArea.date)
    let initialDate  = new Date(props.selectedArea.date)
    let expireDate = new Date(initialDate)
    console.log("expire date ::> ", expireDate)
   
   

    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Infusion Tracker</h3>
                    <span className="close-modal-btn" onClick={cancel}>×</span>
                </div>
                <div className="modal-body">
                
                    <p>This site expires on:</p>
                        {expireDate.getMonth()}/{expireDate.getDate()+3}
                    {/* {   props.selectedArea && props.selectedArea.saveArea? (
                                timer 
                            )
                        :  ""
                    } */}
                </div>
                
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={cancel}>Cancel</button>
                    <button className="btn-continue" onClick={confirmSite}>Confirm</button>
                </div>
            </div>
        </div>
    )

}

export default TimerModal;

