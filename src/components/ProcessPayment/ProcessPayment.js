import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from '../PaymentCardFrom/PaymentCardForm';

const stripePromise = loadStripe('pk_test_51IgvhYDhxvSFD2n8hGXlMqG5tw8p2sonEmWuGttvPGeyoyuK72cCFHBRO7nbcML0ZKPbalV7T3Pbk2nIDkh1UQ4a00PzhPVZAG');


const ProcessPayment = ({order}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm order={order}></PaymentCardForm>
        </Elements>
    );
};

export default ProcessPayment;