import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch(`http://localhost:5000/users`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });

    //handle make admin role through valid admin
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully!')
                    refetch()
                }
            })
    }

    //handle delete user through confirmation modal
    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Selected user has been successfully deleted!')
                    refetch()
                }
            })
    }

    //close modal
    const closeModal = () => {
        setDeleteUser(null)
    }

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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs lg:text-sm'>
                        {users?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-info text-white' >Make Admin</button>}</td>
                            <td><label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className='btn btn-xs btn-warning'>Delete</label></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {deleteUser && <ConfirmationModal
                title={`Are you sure to delete ${deleteUser.name}?`}
                message={'If you delete this, you will never get it back!'}
                closeModal={closeModal}
                successeAction={handleDeleteUser}
                modalData={deleteUser}
            ></ConfirmationModal>}
        </div>
    );
};

export default AllUsers;