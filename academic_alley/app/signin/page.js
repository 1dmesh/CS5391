"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import {
    Button,
    Card,
    Divider,
    Spacer
} from "@nextui-org/react";

import { signin, signInWithGooglePopup } from "@/components/firebase";
import { BorderedInput } from "@/components/inputs"

export default function SigninPage() {
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
        <div className="h-full w-full flex flex-wrap content-center justify-center">
            <Card 
                style={{ height: '75%', width: '75%' }}
                className="flex flex-wrap content-center justify-center">
                <div style={{width: "50%"}}>
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
                    <Button 
                        color="primary"
                        variant="shadow"
                        className="mt-4 w-full"
                        onClick={handleGoogle}>
                    Sign in with Google
                    </Button>
                </div>
            </Card>
        </div>
    );
}