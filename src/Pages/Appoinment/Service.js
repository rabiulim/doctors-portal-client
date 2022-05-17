import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-400'>Try Another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">

                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} class="btn bg-gradient-to-r from-secondary to-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;