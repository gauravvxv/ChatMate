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

    const { loading, signup } = useSignup();

    const handleForm = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
        <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-500 mb-6">
                Signup
                <span className="text-green-600"> Chatmate</span>
            </h1>
    
            <form onSubmit={handleForm} className="flex flex-col gap-4">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <span className="text-xs sm:text-sm md:text-base">Full Name</span>
                        <input 
                            type="text" 
                            className="grow" 
                            value={inputs.fullName} 
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} 
                            required 
                        />
                    </label>
                </div>
    
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <span className="text-xs sm:text-sm md:text-base">Username</span>
                        <input 
                            type="text" 
                            className="grow" 
                            value={inputs.username} 
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} 
                            required 
                        />
                    </label>
                </div>
    
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <span className="text-xs sm:text-sm md:text-base">Password</span>
                        <input 
                            type="password" 
                            className="grow" 
                            value={inputs.password} 
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} 
                            required 
                        />
                    </label>
                </div>
    
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <span className="text-xs sm:text-sm md:text-base">Confirm Password</span>
                        <input 
                            type="password" 
                            className="grow" 
                            value={inputs.confirmPassword} 
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} 
                            required 
                        />
                    </label>
                </div>
    
                <div className="flex gap-4 justify-center">
                    <div className="form-control">
                        <label className="label gap-2 cursor-pointer">
                            <span className="text-xs sm:text-sm md:text-base">Male</span>
                            <input 
                                type="radio" 
                                className="radio radio-success border-gray-800" 
                                value="male" 
                                checked={inputs.gender === "male"} 
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} 
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label gap-2 cursor-pointer">
                            <span className="text-xs sm:text-sm md:text-base">Female</span>
                            <input 
                                type="radio" 
                                className="radio radio-success border-gray-800" 
                                value="female" 
                                checked={inputs.gender === "female"} 
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} 
                            />
                        </label>
                    </div>
                </div>
    
                <Link to="/login" className="text-sm hover:underline hover:text-green-700 mt-2">
                    Already have an account?
                </Link>
    
                <div>
                    <button className="btn btn-block btn-sm mt-2 text-xl" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Signup"}
                    </button>
                </div>
            </form>
        </div>
    </div>
        
    )
}

export default Signup
