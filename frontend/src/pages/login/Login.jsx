import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)

    }

    return (
        <div className="flex flex-col items-center justify-center min-w-[384px] mx-auto p-4">
        <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-500 mb-6">
                Login
                <span className="text-green-600"> Chatmate</span>
            </h1>
    
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        Username
                        <input 
                            type="text" 
                            className="grow" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
    
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        Password
                        <input 
                            type="password" 
                            className="grow" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
    
                <Link to="/signup" className="text-sm hover:underline hover:text-green-700 mt-2">
                    {"Don't"} have an account?
                </Link>
    
                <div>
                    <button className="btn btn-block btm-sm mt-2 text-xl" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    
    )
}

export default Login
