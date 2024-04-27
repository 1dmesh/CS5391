"use client"
import React from "react";
import { useRouter } from 'next/navigation'
import {
    Button,
    Card,
    Divider,
    Spacer
} from "@nextui-org/react";

import signup from "@/components/firebase";
import { DefaultInput } from "@/components/inputs"

export default function SignupPage() {
    const [email, setEmail] = React.useState()
    const [username, setUsername] = React.useState()
    const [firstname, setFirstname] = React.useState()
    const [lastname, setLastname] = React.useState()
    const [password, setPassword] = React.useState()

    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        const { result, error } = await signup(email, password);
        if (error) {
            return console.log(error)
        }
        console.log(result)
        return router.push("/")
    }
    return (
        <div className="h-full w-full flex flex-wrap content-center justify-center">
            <Card 
                style={{ height: '75%', width: '75%' }}
                className="flex flex-wrap content-center justify-center">
                <div style={{width: "50%"}}>
                    <form onSubmit={handleForm}>
                        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                        <Spacer y={10}/>
                        <Divider />
                        <Spacer y={10}/>
                        <DefaultInput
                            isRequired
                            isClearable
                            label="First Name"
                            setState={setFirstname}
                        />
                        <Spacer y={2}/>
                        <DefaultInput
                            isRequired
                            isClearable
                            label="Last Name"
                            setState={setLastname}
                        />
                        <Spacer y={2}/>
                        <DefaultInput
                            isRequired
                            isClearable
                            label="Username"
                            setState={setUsername}
                        />
                        <Spacer y={2}/>
                        <DefaultInput
                            isRequired
                            isClearable
                            type="email"
                            label="Email"
                            setState={setEmail}
                        />
                        <Spacer y={2}/>
                        <DefaultInput
                            isRequired
                            isClearable
                            type="password"
                            label="Password"
                            setState={setPassword}
                        />
                        <Spacer y={5}/>
                        <Button
                            type="submit"
                            color="primary"
                            variant="shadow"
                            className="mt-4 w-full">
                        Sign up
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}