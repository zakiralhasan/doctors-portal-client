import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="max-w-sm md:mx-auto p-8 border mx-2 my-6 md:my-48">
        <h1 className="text-xl ">Sign Up</h1>
        <form>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <button className="bg-[#3A4256] mt-5 py-4 text-white w-full rounded-lg">
              LOGIN
            </button>
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
          <button className="border border-[#3A4256] py-4 w-full rounded-lg">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
