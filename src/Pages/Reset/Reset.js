import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Reset = () => {
  //used for react hook form
  const { register, handleSubmit, reset } = useForm();
  //used for handle firebase error
  const [firebaseError, setFirebaseError] = useState();
  //used context api
  const { user, setLoading, resetUserPassword } = useContext(AuthContext);

  //login with email and password
  const handleForm = (data) => {
    resetUserPassword(data.email)
      .then((result) => {
        setFirebaseError("");
        reset();
      })
      .catch((error) => setFirebaseError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="max-w-sm md:mx-auto p-8 border mx-2 my-6 md:my-48">
        <h1 className="text-xl ">Reset Password</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="">
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
            {firebaseError && (
              <small className="text-red-500 text-left">{firebaseError}</small>
            )}
            <input
              type="submit"
              className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
              value="RESET"
            />
            <p className="text-xs text-left mt-3">
              New to Doctors Portal?
              <Link to="/signup" className="link link-hover">
                <span className="ml-2 text-[#19D3AE]">Create new account</span>
              </Link>
            </p>
            <p className="text-xs text-left mt-3">
              Already have an account?
              <Link to="/signup" className="link link-hover">
                <span className="ml-2 text-[#19D3AE]">
                  Login to your account
                </span>
              </Link>
            </p>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Reset;
