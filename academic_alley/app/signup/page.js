'use client'
import React from "react";
import signup from "@/components/auth/signup";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signup(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <>
            <div style={{ height: '100%', width: '100%' }} className="flex flex-wrap justify-center content-center">
                <form className="w-96" onSubmit={handleForm}>
                    <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Username
                    </label>
                    <input
                        required
                        type="text"
                        id="username"
                        name="username"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        required
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        required
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        SignUp
                    </button>
                </form>
            </div>
        </>
    );
}

export default Page;