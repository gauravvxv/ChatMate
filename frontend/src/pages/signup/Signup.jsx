import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const {loading , signup} = useSignup();

    const handleForm = async(e) => {
        e.preventDefault();
      await signup(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 '>
                <h1 className='text-3xl font-semibold text-center text-gray-500 pb-6'>
                    Signup
                    <span className='text-green-600'> Chatmate</span>
                </h1>

                <form onSubmit={handleForm}>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Full Name
                            <input type="text" className="grow" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Username
                            <input type="text" className="grow" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Password
                            <input type="password" className="grow" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </label>
                    </div>

                    <div className='p-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            Confirm Password
                            <input type="password" className="grow" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </label>
                    </div>

                    <div className='flex p-2'>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Male</span>
                                <input type="checkbox" className='checkbox checkbox-success border-gray-800' checked={inputs.gender === "male"} value="male" onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} />
                            </label>
                        </div>

                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer`}>
                                <span className='label-text'>Female</span>
                                <input type="checkbox" className='checkbox checkbox-success border-gray-800' value="female" checked={inputs.gender === "female"} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} />
                            </label>
                        </div>
                    </div>


                    <Link to="/login" className='text-sm hover:underline hover:text-green-700 inline-block mt-2 pl-4'>
                        Already have an account?
                    </Link>

                    <div className='p-2'>
                        <button className='btn btn-block btm-sm mt-2 text-xl' disabled={loading}>

                            {loading ? <span className='loadind loading-spinner'></span> : "Signup" }
                        
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
