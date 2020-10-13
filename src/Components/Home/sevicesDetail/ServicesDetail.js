import React from 'react';

const ServicesDetail = ({services}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={services.img} alt="" />
    <h5 className="mt-4 mb-4">{services.name}</h5>
    <p>lorem ipsum dolor sit amet, consectetur It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
    );
};

export default ServicesDetail;