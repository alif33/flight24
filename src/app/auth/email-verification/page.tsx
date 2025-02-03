import React from "react"
import Link from "next/link"

const ForgetPassword = () =>{
    return(
        <div className="flex justify-center pt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Forgot password</h2>
                    <p className="text-gray-600 text-sm pt-[6px]">{"No worries, we'll send you reset instructions."}</p>
                </div>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"/>
                    </div>
                    <button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline">
                        Reset password
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">
                        <Link href="/auth/signin" className="text-neutral-800 hover:text-neutral-950">Back to log in</Link>
                    </p>
                </div>
            </div>
        </div>
       
    )
}
export default ForgetPassword