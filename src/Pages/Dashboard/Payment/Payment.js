import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK); //used for stripe
const Payment = () => {
    const booking = useLoaderData();
    const { treatmentName, selectedDate, selectedTime, price } = booking;

    return (
        <div className='text-left p-8'>
            <h1 className='text-2xl'>Payment for {treatmentName}</h1>
            <p>Please pay <span className='font-bold'>${price}</span> for your appointment on {selectedDate} at {selectedTime}</p>
            <div className='bg-white max-w-sm p-4 mt-5 border rounded-md '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;