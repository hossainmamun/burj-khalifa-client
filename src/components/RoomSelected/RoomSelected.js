import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App.js';
// material ui date picker
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const RoomSelected = () => {
    const { bedTypes } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // material date state
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date(),
    });
    const handleCheckIn = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date
        setSelectedDate(newDates);
    };
    const handleCheckOut = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date
        setSelectedDate(newDates);
    };
    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:5000/addBookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='text-center mt-5 pt-5'>
            <h2>Hi <span className='fw-bolder'>{loggedInUser.username}</span></h2>
            <h4 className='text-capitalize'>you booked a <strong className='text-danger'>{bedTypes}</strong> room</h4>
            <Link to="/home">
                <p>want to different room?</p>
            </Link>

            {/* -------------- date picker -------------- */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-evenly">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkIn}
                        onChange={handleCheckIn}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOut}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <div className='mt-5'>
                <button className='btn btn-info px-4 me-3 text-white' onClick={handleBooking}>Book Now</button>
                <Link to="/bookingInfo">
                    <button className='btn btn-primary px-4 ms-3'>MY Booking List</button>
                </Link>
            </div>
        </div>
    );
};

export default RoomSelected;