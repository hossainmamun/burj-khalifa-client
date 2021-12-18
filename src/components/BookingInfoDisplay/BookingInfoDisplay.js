import React from 'react';

const BookingInfoDisplay = (props) => {
    const {username, email, checkIn, checkOut} = props.books
    return (
        <tbody>
            <tr>
                <td>{username}</td>
                <td>{email}</td>
                <td>{new Date(checkIn).toDateString('dd/MM/yyyy')}</td>
                <td>{new Date(checkOut).toDateString('dd/MM/yyyy')}</td>
            </tr>
        </tbody>
    );
};

export default BookingInfoDisplay;