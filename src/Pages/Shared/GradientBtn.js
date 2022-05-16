import React from 'react';

const GradientBtn = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary ">{children}</button>
    );
};

export default GradientBtn;