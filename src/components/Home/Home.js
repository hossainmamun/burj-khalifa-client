import React from 'react';
import '../../StyleSheet/MainInterface.scss'
import Navigation from '../Navigation/Navigation.js';

const Home = () => {
    return (
        <div className='mainInterface'>
            <div className="overlay">
                <Navigation/>
            </div>
        </div>
    );
};

export default Home;