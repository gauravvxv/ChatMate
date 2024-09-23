import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 '>
            <h1 className='text-3xl font-semibold text-center text-gray-500 pb-6'>
                    Login
                    <span className='text-green-600'> Chatmate</span>
                </h1>

                <form>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Username
                            <input type="text" className="grow"  />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Password
                            <input type="password" className="grow"  />
                        </label>
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-green-700 inline-block mt-2 pl-4'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='p-2'>
                        <button className='btn btn-block btm-sm mt-2 text-xl'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
