'use client'
import React from "react";
import { signin, signInWithGooglePopup } from "@/components/firebase";
import { useRouter } from 'next/navigation'

import {
    Button,
    Input
} from "@nextui-org/react";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const togglePasswordVisible = () => setIsVisible(!setPasswordVisible);

    const handleForm = async (event) => {
        event.preventDefault()
        const { result, error } = await signin(email, password);
        if (error) {
            return console.log(error)
        }
        console.log(result)
        return router.push("/home")
    }

    return (
        <>
            <div style={{ height: '100%', width: '100%' }} className="flex flex-wrap content-center justify-center">
                <div className="w-96">
                    <form onSubmit={handleForm}>
                        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
                        <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <Input
                            isRequired
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            onChange={(e) => setEmail(e.target.value)}
                        />                    
                        <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <Input
                            isRequired
                            label="Password"
                            variant="bordered"
                            placeholder="Enter your password"
                            className="max-w-xs"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={togglePasswordVisible}>
                                {passwordVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                                </button>
                            }
                            type={passwordVisible ? "text" : "password"}
                            nChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
                            >
                        LogIn
                        </Button>
                    </form>
                    <Button onClick={signInWithGooglePopup}>
                        Sign in with google
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Page;