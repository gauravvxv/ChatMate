import React from 'react'

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 '>
                <h1 className='text-3xl font-semibold text-center text-gray-500 pb-6'>
                    Signup
                    <span className='text-blue-500'> Chatmate</span>
                </h1>

                <form>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Full Name
                            <input type="text" className="grow" />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Username
                            <input type="text" className="grow" />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Password
                            <input type="password" className="grow" />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Confirm Password
                            <input type="password" className="grow" />
                        </label>
                    </div>

                    <div className='flex p-2'>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Male</span>
                                <input type="checkbox" className='checkbox checkbox-info border-gray-500' />
                            </label>
                        </div>

                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Female</span>
                                <input type="checkbox" className='checkbox checkbox-info border-gray-500' />
                            </label>
                        </div>
                    </div>


                    <a href="#" className='text-sm hover:underline hover:text-blue-700 inline-block mt-2 pl-4'>
                        {"Don't"} have an account?
                    </a>

                    <div className='p-2'>
                        <button className='btn btn-block btm-sm mt-2 text-xl'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
