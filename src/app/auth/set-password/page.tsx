import React from "react"
import Link from "next/link"

const ForgetPassword = () =>{
    return(
        <div className="flex justify-center pt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Choose a password</h2>
                    <p className="text-gray-600 text-sm pt-[6px]">{"Must be at least 8 characters."}</p>
                </div>

                <form>
                    <div className="mb-4">
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Choose a password"
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Confirm password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline">
                        Continue
                    </button>
                </form>
            </div>
        </div>
       
    )
}
export default ForgetPassword