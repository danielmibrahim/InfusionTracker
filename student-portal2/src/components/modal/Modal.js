import React from 'react';
import './Modal.css';

import Timer  from 'react-compound-timer';



const Modal = (props) => {

    let cancel = (event) => {
        props.removeLastAddedArea()
    }


    let confirmSite = (event) => {
        props.beginSiteTracker()
        props.areasSubmitHandler()
        props.close()

    };

    console.log("Timer props -> ", props.selectedArea.date)
    let expireDate  = new Date(props.selectedArea.date)
    expireDate.setDate(expireDate.getDate()+3)
    console.log("expire date ::> ", expireDate)
    let expireTime = expireDate.getTime()/1000
    let initialTime = props.selectedArea? new Date(props.selectedArea.date).getTime()/1000 : 0
    console.log("Time is ::> ", initialTime)
    let timer = (
        <Timer
            initialTime={initialTime}
            direction="backward"
            checkpoints={[
                {
                    time:  initialTime - expireTime,
                    callback: () => console.log('Checkpoint A')
                }

            ]}
        >
            {() => (
                <React.Fragment>
                    <Timer.Days /> days
                    <Timer.Hours /> hours
                    <Timer.Minutes /> minutes
                    <Timer.Seconds /> seconds
                </React.Fragment>
            )}
        </Timer>
    )

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
                    <p>Time left for this infusion site:</p>
                        {timer}
                    {/* {   props.selectedArea && props.selectedArea.saveArea? (
                                timer 
                            )
                        :  ""
                    } */}
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                        Do you want to confirm this as your current infusion site?
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={cancel}>Cancel</button>
                    <button className="btn-continue" onClick={confirmSite}>Confirm</button>
                </div>
            </div>
        </div>
    )

}

export default Modal;

