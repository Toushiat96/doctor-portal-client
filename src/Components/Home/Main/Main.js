import React from 'react';
import chair from '../../../images/chair.png'
const Main = () => {
    return (
        <main>
        <div style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1"> 
        <h1 style={{color:'#3A4256'}}> Your New Smile <br/> Starts here</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry It is a long established fact that a reader will be distracte.</p>
        <button className="btn btn-primary"> GET APPOINTMENT </button>
        
        </div>
        <div className="col-md-6"> 
        <img src={chair} alt="" className="img-fluid" />
        
        </div>
        </div>
        
        </main>
    );
};

export default Main;