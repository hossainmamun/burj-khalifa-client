import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App.js';
import BookingInfoDisplay from '../BookingInfoDisplay/BookingInfoDisplay.js';

const BookingInfo = () => {
    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        fetch('http://localhost:5000/bookingList?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])
    return (
        <div className='container'>
            <div>
                <h4 className='text-center text-capitalize my-4 fw-bolder'>you have {bookings.length} bookings</h4>
            </div>
            <div className='table-responsive-md'>
                <table className='table table-bordered border-dark'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CheckIn</th>
                            <th>CheckOut</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(books => <BookingInfoDisplay books={books} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default BookingInfo;