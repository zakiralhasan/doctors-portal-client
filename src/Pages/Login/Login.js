import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  //used for react hook form
  const { register, handleSubmit, reset } = useForm();
  //used for handle firebase error
  const [firebaseError, setFirebaseError] = useState();
  //used context api
  const { user, setLoading, loginUser, loginUserWithGoogle } =
    useContext(AuthContext);

  //this useState work for stor login user's email
  const [loginUserEmail, setloginUserEmail] = useState('');

  //custom hooks call for creating jwt
  const [token] = useToken(loginUserEmail)

  //used for login user redirect path issue
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //login with email and password
  const handleForm = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        setloginUserEmail(data.email)
        setFirebaseError("");
        reset();
      })
      .catch((error) => setFirebaseError(error.message))
      .finally(() => setLoading(false));
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

  //send login user expected page after successfull signup
  if (token) {
    navigate(from, { replace: true }); //used for login user redirect path
  }

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
                <Link to="/reset" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {firebaseError && (
              <small className="text-red-500 text-left">{firebaseError}</small>
            )}
            <input
              type="submit"
              className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
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

export default Login;
