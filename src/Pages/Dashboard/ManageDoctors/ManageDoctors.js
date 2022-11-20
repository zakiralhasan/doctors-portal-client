import { useQuery } from '@tanstack/react-query';
import React from 'react';


const ManageDoctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () =>
            fetch(`http://localhost:5000/doctors`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });


    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>All Users</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs lg:text-sm'>
                        {doctors?.map((doctor, index) => <tr key={doctor._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={doctor.doctorImg} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td>{doctor.doctorName}</td>
                            <td>{doctor.doctorSpecialty}</td>
                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;