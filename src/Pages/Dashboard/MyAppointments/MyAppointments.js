import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });

    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>My Appointment</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs lg:text-sm'>
                        {bookings?.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.patientName}</td>
                            <td>{booking.treatmentName}</td>
                            <td>{booking.selectedTime}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;