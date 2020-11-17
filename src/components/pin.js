import pin from '../images/pin.png';
import React, { useState, useEffect } from 'react';

const MapPin = () => {
    return (
        <img
            src={pin}
            alt="Pin"
            style={{ height: '70px', width: '70px' }}
        ></img>
    );
};

export default MapPin;
