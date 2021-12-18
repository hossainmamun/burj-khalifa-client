import React from 'react';
import '../../StyleSheet/MainInterface.scss'
import Home from '../Home/Home.js';
import HotelRoom from '../HotelRoom/HotelRoom.js';

const MainInterface = () => {
    return (
        <div>
            <Home></Home>
            <HotelRoom />
        </div>
    );
};

export default MainInterface;