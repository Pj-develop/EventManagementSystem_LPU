import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically call your backend API or authentication service
    console.log('Requesting password reset for:', email);
    // Example: await auth.resetPassword(email);
    alert('If an account with that email exists, we have sent an email to reset your password.');
  };

  return (
    <div className="flex w-full h-full px-10 py-10 justify-center place-items-center mt-20">
      <div className="bg-white w-1/3 px-7 py-7 rounded-xl">
        <form className="flex flex-col w-auto items-center" onSubmit={handleSubmit}>
          <h1 className='px-3 font-extrabold mb-5 text-primarydark text-2xl'>Forgot Password</h1>
          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {/* SVG Path here */}
            </svg>
            <input
              type="email"
              placeholder="Email"
              className="input-et"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full py-4">
            <button type="submit" className="primary w-full">Submit</button>
          </div>
          <Link to={"/login"} className="">
            <button className="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}