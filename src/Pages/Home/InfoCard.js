import React from 'react';

const InfoCard = ({ bgClass, cardTitle, img }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 sm:pt-5'><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;