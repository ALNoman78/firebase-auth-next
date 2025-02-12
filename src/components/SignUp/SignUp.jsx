import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success , setSuccess] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()

        setError('')
        setSuccess(false)

        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, email, password)

        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                setSuccess(true)
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('verification code sent')
                        e.target.reset()
                        navigate('/')

                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
                setSuccess(false)
            })
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
                        {
                            error && <p className='text-xl font-medium text-red-600'>{error}</p>
                        }
                        {
                            success && <p className='text-xl font-medium text-green-600'>Successfull Submitted</p>
                        }
                        <Link to='/login' className='inline-flex gap-2'>Already have an account ?<p className='underline font-medium text-green-500'>Log in</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

SignUp.propTypes = {}

export default SignUp