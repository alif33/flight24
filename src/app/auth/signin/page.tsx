import React from "react"
import Link from "next/link"

const Login = () =>{
    return(
        <div className="flex justify-center pt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Log in</h2>
                    <p className="text-gray-600 text-sm">Welcome back! Please enter your details.</p>
                </div>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" placeholder="********"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="w-4 h-4 mr-2 text-purple-600 bg-gray-200 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="remember" className="text-gray-700 text-sm">Remember</label>
                        </div>
                        <Link href="/auth/forget-password" className="text-neutral-800 hover:text-neutral-950 text-sm font-medium" >Forgot password?</Link>
                    </div>

                    <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline">
                        Sign in
                    </button>

                    <button type="button" className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1C4.477 1 0 5.477 0 10s4.477 9 10 9c5.523 0 10-4.477 10-9S15.523 1 10 1zm-1 13.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM4 8a.5.5 0 01.5-.5H9v-2.5a.5.5 0 011 0V8h2.5a.5.5 0 010 1H10v2.5a.5.5 0 01-1 0V9.5H4.5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                        </svg>
                        Sign in with Google
                    </button>

                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">{"Don't have an account? "} 
                        <Link href="/auth/register" className="text-neutral-800 hover:text-neutral-950">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
       
    )
}
export default Login