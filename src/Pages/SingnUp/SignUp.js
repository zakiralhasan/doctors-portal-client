import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  //used for react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //used for handle firebase error
  const [firebaseError, setFirebaseError] = useState();
  //used context api
  const { user, setLoading, createUser, loginUserWithGoogle } =
    useContext(AuthContext);

  //create or signup new user
  const handleForm = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setFirebaseError("");
        reset();
      })
      .catch((error) => setFirebaseError(error.message));
  };

  //login with google account
  const loginWithGoogle = () => {
    loginUserWithGoogle()
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        setFirebaseError("");
      })
      .catch((error) => setFirebaseError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="max-w-sm md:mx-auto p-8 border mx-2 my-6 md:my-48">
        <h1 className="text-xl ">Sign Up</h1>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input input-bordered w-full "
                required
              />
              {errors.password && (
                <small className="text-red-500 text-left">
                  {errors.password.message}
                </small>
              )}
            </div>
            {firebaseError && (
              <small className="text-red-500 text-left">{firebaseError}</small>
            )}
            <input
              type="submit"
              className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
              value="SINGUP"
            />
            <p className="text-xs text-left mt-3">
              Already have an account?
              <Link to="/login" className="link link-hover">
                <span className="ml-2 text-[#19D3AE]">
                  Login to your account
                </span>
              </Link>
            </p>
            <div className="divider">OR</div>
          </div>
        </form>
        <div>
          <button
            onClick={loginWithGoogle}
            className="border border-[#3A4256] py-4 w-full rounded-lg"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
