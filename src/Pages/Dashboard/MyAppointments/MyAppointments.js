import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../UtilityComponents/StartButton/Loading';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });
    if (isLoading) {
        return <Loading></Loading>
    }
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs lg:text-sm'>
                        {bookings?.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.patientName}</td>
                            <td>{booking.treatmentName}</td>
                            <td>{booking.selectedTime}</td>
                            <td>
                                {
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className="btn btn-xs btn-error">Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className="bg-green-400 px-2 py-1 rounded-lg text-xs font-semibold">
                                        PAID
                                    </span>
                                }
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;