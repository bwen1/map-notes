import './App.css';
import React, { useState, useEffect } from 'react';
import Map from './components/map';

const App = () => {
    const [page, setPage] = useState(true);
    const [position, setPosition] = useState();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((p) => {
            setPosition({
                lat: p.coords.latitude,
                lng: p.coords.longitude,
            });
            console.log(p.coords);
        });
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <Map center={position}></Map>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <button style={{ marginTop: '20px' }}>Save my location</button>
                <button style={{ marginTop: '20px' }}>My saved location</button>
            </div>
        </div>
    );
};

export default App;
