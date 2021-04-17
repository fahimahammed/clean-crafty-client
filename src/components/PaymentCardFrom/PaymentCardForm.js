import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link, useHistory, useLocation } from 'react-router-dom';

const PaymentCardForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            const orderDetails = {
                ...order,
                paymentID: paymentMethod.id,
                last4: paymentMethod.card.last4,
                cardBrand: paymentMethod.card.brand,
                status: 'Pending'
            }
            setPaymentSuccess(orderDetails);
            const url = `https://morning-retreat-13723.herokuapp.com/addOrder`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            })
                .then(res => console.log(res));
                alert('Payment Successfull. Thank you.');
                history.replace(from);
                setPaymentError(null);
        }
    };
    //console.log('log ;: ', paymentSuccess);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-danger rounded-pill mt-4' type="submit" disabled={!stripe}>
                    Pay Now
            </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
        </div>
    );
};

export default PaymentCardForm;