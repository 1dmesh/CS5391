"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import {
    Button,
    Card,
    Divider,
    Spacer,
} from "@nextui-org/react";
import { sendPasswordResetEmail } from "firebase/auth";

import { 
    authInstance,
    signin, 
    signInWithGooglePopup 
} from "@/components/firebase";
import { BorderedInput } from "@/components/inputs"

function Login({setForgotPass}) {
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
        return router.push("/")
    }

    const handleGoogle = () => {
        signInWithGooglePopup().then((result) => {
            if(result) {
                router.push("/")
            }
        })
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <Spacer y={10}/>
                <Divider/>
                <Spacer y={10}/>
                <BorderedInput
                    isRequired
                    isClearable
                    type="email"
                    label="Email"
                    setState={setEmail}
                />
                <Spacer y={5}/>
                <BorderedInput
                    isRequired
                    isClearable
                    type={passwordVisible ? "text" : "password"}
                    label="Password"
                    setState={setPassword}
                />
                <Spacer y={5}/>
                <Button
                    type="submit"
                    color="primary"
                    variant="shadow"
                    className="mt-4 w-full">
                Sign in
                </Button>
            </form>
            <Spacer y={5}/>
            <Button 
                color="primary"
                variant="shadow"
                className="w-full"
                onClick={handleGoogle}>
            Sign in with Google
            </Button>
            <Spacer y={5}/>
            <Button 
                color="primary" 
                variant="light"
                onPress={() => setForgotPass(true)}>
            Forgot Password?
            </Button>
        </>
    );
}

function ForgotPassword({setForgotPass}) {
    const [email, setEmail] = React.useState("")

    const forgotPassword = async (event) => {
        event.preventDefault()
        sendPasswordResetEmail(authInstance(), email)
        .then(() => {
            setForgotPass(false)
        })
        .catch((error) => {
            console.error(error)
        });
    }
    
    return (
        <>
            <h1 className="text-2xl font-bold text-center">Password Recovery</h1>
            <Spacer y={10}/>
            <Divider/>
            <Spacer y={10}/>
            <form onSubmit={forgotPassword}>
                <BorderedInput
                    isRequired
                    isClearable
                    type="email"
                    label="Email"
                    setState={setEmail}/>
                <Spacer y={10}/>
                <div class="columns-2 space-x-5">
                <Button 
                    color="primary" 
                    onPress={() => setForgotPass(false)}>
                Cancel
                </Button>
                <Button 
                    type="submit"
                    color="primary">
                Submit
                </Button>
                </div>
            </form>
        </>
    );
}

export default function SigninPage() {
    const [forgotPass, setForgotPass] = React.useState(false)

    return (
        <div className="h-full w-full flex flex-wrap content-center justify-center">
            <Card 
                style={{ height: '75%', width: '75%' }}
                className="flex flex-wrap content-center justify-center">
                <div style={{width: "50%"}}>
                    { forgotPass ? 
                    <ForgotPassword setForgotPass={setForgotPass}/> :
                    <Login setForgotPass={setForgotPass}/>}
                </div>
            </Card>
        </div>
    );
}