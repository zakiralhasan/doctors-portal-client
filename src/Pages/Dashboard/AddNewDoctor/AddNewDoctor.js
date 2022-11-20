import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddNewDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    //used for handle firebase error
    const [firebaseError, setFirebaseError] = useState();
    //get image hosting site's api key
    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()

    const { data: specialties, refetch } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: () => fetch(`http://localhost:5000/appointmentSpecialty`)
            .then(res => res.json())

    })


    const handleForm = (data) => {
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctorInfo = {
                        doctorName: data.name,
                        doctorEmail: data.email,
                        doctorSpecialty: data.specialty,
                        doctorImg: imgData.data.url
                    }

                    //sent new doctor information on mongoDB through backend
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            if (doctorData.acknowledged) {
                                toast.success('Doctor added successfully!')
                                navigate('/dashboard/manageDoctors')
                            }
                        })
                }
            })
    }
    return (

        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>Add New Doctor</h1>
            </div>
            <div className="bg-white max-w-[540px] p-8 mx-2 my-6">
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Your full name"
                                className="input input-bordered w-full "
                            />
                            {errors.name && (
                                <small className="text-red-500 text-left">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className="input input-bordered w-full "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Spaciality</span>
                            </label>
                            <select

                                {...register("specialty")}
                                className="select select-bordered w-full "
                            >
                                <option>Choose one</option>
                                {specialties?.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >
                                    {specialty.name}
                                </option>)}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                {...register("img")}
                                className="input input-bordered w-full p-2"
                                required
                            />
                        </div>

                        {firebaseError && (
                            <small className="text-red-500 text-left">{firebaseError}</small>
                        )}
                        <input
                            type="submit"
                            className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
                            value="Add"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewDoctor;