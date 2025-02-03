"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Register = () =>{
    const router = useRouter()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        router.push("/auth/set-password")
    }

    return(
        <div className="flex justify-center pt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-[550px]">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Register</h2>
                    <p className="text-gray-600 text-sm">Welcome back! Please enter your details.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-2">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                            <input 
                                id="firstName" 
                                type="text" 
                                name="firstName" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="John"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                            <input 
                                id="lastName" 
                                type="text" 
                                name="lastName" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input 
                                id="email" 
                                type="email" 
                                name="email" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
                            <input 
                                id="phoneNumber" 
                                type="phone" 
                                name="phoneNumber" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="123-456-7890"
                            />
                        </div>
                        <div className="col-span-2 mb-6">
                            <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Street address</label>
                            <input 
                                id="streetAddress" 
                                type="text" 
                                name="streetAddress" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="123 Main St"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                            <input 
                                id="streetAddress" 
                                type="text" 
                                name="streetAddress" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="New York"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Postal/Zip Code</label>
                            <input 
                                id="streetAddress" 
                                type="text" 
                                name="streetAddress" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="10001"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Province/State</label>
                            <input 
                                id="streetAddress" 
                                type="text" 
                                name="streetAddress" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="New York"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">Country/Region</label>
                            <input 
                                id="streetAddress" 
                                type="text" 
                                name="streetAddress" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="USA"
                            />
                        </div>
                    </div>
                   
                    <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline">
                        Get Started
                    </button>

                    <button type="button" className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1C4.477 1 0 5.477 0 10s4.477 9 10 9c5.523 0 10-4.477 10-9S15.523 1 10 1zm-1 13.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM4 8a.5.5 0 01.5-.5H9v-2.5a.5.5 0 011 0V8h2.5a.5.5 0 010 1H10v2.5a.5.5 0 01-1 0V9.5H4.5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                        </svg>
                        Sign in with Google
                    </button>

                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">{"Already have an account?"} <Link href="/auth/signin" className="text-neutral-800 hover:text-neutral-950">Sign in</Link></p>
                </div>
            </div>
        </div>
       
    )
}
export default Register