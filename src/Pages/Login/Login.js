import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AutheContext } from "../../Context/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [firebaseError, setFirebaseError] = useState();
  const { user, logingUser } = useContext(AutheContext);

  const handleForm = (data) => {
    console.log(data);
    logingUser(data.email, data.password)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        setFirebaseError("");
      })
      .catch((error) => setFirebaseError(error.message));
  };

  return (
    <div>
      <div className="max-w-sm md:mx-auto p-8 border mx-2 my-6 md:my-48">
        <h1 className="text-xl ">Login</h1>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                className="input input-bordered w-full "
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {firebaseError && (
              <small className="text-red-500 text-left">{firebaseError}</small>
            )}
            <input
              type="submit"
              className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg"
              value="LOGIN"
            />
            <p className="text-xs text-left mt-3">
              New to Doctors Portal?
              <Link to="/signup" className="link link-hover">
                <span className="ml-2 text-[#19D3AE]">Create new account</span>
              </Link>
            </p>
            <div className="divider">OR</div>
          </div>
        </form>
        <div>
          <button className="border border-[#3A4256] py-4 w-full rounded-lg">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
