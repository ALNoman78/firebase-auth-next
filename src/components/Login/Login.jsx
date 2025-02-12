import { useContext, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Bounce, ToastContainer } from 'react-toastify';

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate()

    const { signInUser } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')
        setSuccess(false)

        // console.log(name, password)

        signInUser(email, password)
            .then(() => {
                console.log('Login Successful')
                setSuccess(true)
                // reset the form here
                e.target.reset()
                // reset and go to home page
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
                setSuccess(false)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl md:w-[450px] mx-auto">
                    <div className="card-body ">
                        <form onSubmit={handleLogIn} className="fieldset">
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
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        {
                            success && <div className="toast toast-top toast-center">
                                <div className="alert alert-success">
                                    <span>Log In Successfully.</span>
                                </div>
                            </div>
                        }
                        {
                            error && <div className="toast toast-top toast-center">
                                <div className="alert alert-info bg-red-400">
                                    <span>{error}</span>
                                </div>
                            </div>
                        }

                        <Link to='/signup' className='inline-flex gap-2'>Create an account ?<p className='underline font-medium text-green-500'>Sign Up</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login