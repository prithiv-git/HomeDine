import React, { useState } from 'react';
import './TrackOrder.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const TrackOrder = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);

    const handleOrderNumberChange = (e) => {
        setOrderNumber(e.target.value);
    };

    const handleTrackOrder = (e) => {
        e.preventDefault();
        // Mock order tracking data
        const mockOrderData = {
            orderNumber: '12345',
            status: 'Your order is being prepared.',
            location: { lat: -3.745, lng: -38.523 } // Mock location data
        };

        if (orderNumber === mockOrderData.orderNumber) {
            setOrderStatus(mockOrderData);
        } else {
            setOrderStatus({ status: 'Order not found.' });
        }
    };

    return (
        <div className="track-order-container">
            <h3>Track Your Order</h3>
            <form className="track-order-form" onSubmit={handleTrackOrder}>
                <label htmlFor="orderNumber">Order Number:</label>
                <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={handleOrderNumberChange}
                    placeholder="Enter your order number"
                />
                <button type="submit" className="btn btn-primary">Track Order</button>
            </form>
            {orderStatus && (
                <div className="order-status">
                    <p>{orderStatus.status}</p>
                    {orderStatus.location ? (
                        <LoadScript googleMapsApiKey="AIzaSyB6vKg8ucZjJWmzm19BLd4wMffawjy0YvE">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={orderStatus.location}
                                zoom={10}
                            >
                                <Marker position={orderStatus.location} />
                            </GoogleMap>
                        </LoadScript>
                    ) : (
                        <div className="error-container">
                            <h1>Oops! Something went wrong.</h1>
                            <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default TrackOrder;
