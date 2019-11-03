import React from 'react';
import './Modal.css';
import { Timer } from 'react-compound-timer';


const TimerModal = (props) => {




    return (
        <div></div>
        // <div>
        //     <div className="modal-wrapper"
        //         style={{
        //             transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
        //             opacity: props.show ? '1' : '0'
        //         }}>
        //         <div className="modal-header">
        //             <h3>Infusion Tracker</h3>
        //             <span className="close-modal-btn" onClick={props.close}>×</span>
        //         </div>
        //         <div className="modal-body">
        //             <p>
        //                 Time left for this infusion site:

        //                 <Timer
        //                     initialTime={10000}
        //                     direction="backward"
        //                     checkpoints={[
        //                         {
        //                             time: 10000 - 10000,
        //                             callback: () => console.log('Checkpoint A'),
        //                         }

        //                     ]}
        //                 >
        //                     {() => (
        //                         <React.Fragment>
        //                             <Timer.Days /> days
        //                             <Timer.Hours /> hours
        //                             <Timer.Minutes /> minutes
        //                             <Timer.Seconds /> seconds
        //                             <Timer.Milliseconds /> milliseconds
        //                         </React.Fragment>
        //                     )}
        //                 </Timer>

        //             </p>
        //         </div>
        //         <div className="modal-footer">
        //             <button className="btn-primary" onClick={props.close}>Close</button>
        //         </div>
        //     </div>
        // </div>
    )

}

export default TimerModal;

