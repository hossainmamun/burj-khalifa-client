import React from 'react';
import { Link } from 'react-router-dom';

const HotelRoomDisplay = (props) => {
    const { title, description, imgUrl, bed, capacity, bedType, avatar, price } = props.room
    return (
        <div className='col-md-4'>
            <div className="card border-0 shadow">
                <div className="card-header text-center py-3 bg-white">
                    <span className='me-4 bg-danger p-2 text-white rounded-3'>{avatar}</span>
                    <strong>{title}</strong>
                </div>
                <img src={imgUrl} className='img-fluid' alt="img" />
                <div className="card-body text-center my-3">
                    <p>{description}</p>
                    <span className='me-3'>capacity : {capacity}</span>
                    <span className='me-3'>$: {price}</span>
                    <Link to={`roomSelected/${bedType}`}>
                        <button className='btn btn-primary'>Book Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HotelRoomDisplay;