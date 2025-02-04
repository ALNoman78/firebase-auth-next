import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = props => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSignUp = e => {
        e.preventDefault()

        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name , email , password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Form</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-[450px] mx-auto">
                    <div className="card-body ">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input" name='username' placeholder="Name" />

                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <div className="relative mt-1">
                                <input
                                    type={isVisible ? 'text' : 'password'}
                                    id="pass"
                                    name='password'
                                    placeholder="Password"
                                    className="bg-background w-full outline-none focus-within:border-blue-700 rounded-md p-2  border-2 "
                                />
                                <div
                                    className="absolute top-3 right-4 text-2xl text-gray-500 cursor-pointer"
                                    onClick={() => setIsVisible((prev) => !prev)}>
                                    {isVisible ? <Eye size={22} /> : <EyeOff size={22} />}
                                </div>
                            </div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                        <Link to='/login' className='inline-flex gap-2'>Already have an account ?<p className='underline font-medium text-green-500'>Log in</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

SignUp.propTypes = {}

export default SignUp