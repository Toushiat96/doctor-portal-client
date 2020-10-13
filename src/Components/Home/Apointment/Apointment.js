import React from 'react';
import apointment from '../../../images/5790-removebg.png'
import './Apointment.css'

const Apointment = () => {
    return (
       <section className="make-appointment" >
       <div className="container">
       <div className="row">
       <div className="col-md-5 d-none d-md-block">
       <img src={apointment} className="img-fluid" alt="" />
       </div>
       <div className="col-md-7  py-5">
       <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam 
                        <br/>ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
       </div>
       </div>
       
       </div>
       </section>
    );
};

export default Apointment;