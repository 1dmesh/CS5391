"use client"
import React from "react";
import { 
  Avatar,
  Button,
  Card,
  Divider,
  Spacer,
} from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance, sendPasswordReset } from "@/components/firebase"
import { BorderedInput } from "@/components/inputs";

export default function Account() {
  const [user, setUser] = React.useState()
  const [email, setEmail] = React.useState()
  const [address, setAddress] = React.useState()
  const [username, setUsername] = React.useState()
  const [city, setCity] = React.useState()
  const [firstname, setFirstname] = React.useState()
  const [state, setState] = React.useState()
  const [lastname, setLastname] = React.useState()
  const [zipcode, setZipcode] = React.useState()

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
  });

  const fields = [
    {
      label: "Email",
      type: "email",
      setState: setEmail
    },
    {
      label: "Address",
      setState: setAddress
    },
    {
      label: "Username",
      setState: setUsername
    },
    {
      label: "City",
      setState: setCity
    },
    {
      label: "First Name",
      setState: setFirstname
    },
    {
      label: "State",
      setState: setState
    },
    {
      label: "Last Name",
      setState: setLastname
    },
    {
      label: "Zipcode",
      setState: setZipcode
    },
  ]

  const forgotPassword = (event) => {
    sendPasswordReset(email)
    alert("Please check your email for a password reset!")
  }

  const updateInfo = (e) => {
    alert("Information Updated.")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-wrap content-center justify-center">
      <Card style={{ height: '80%', width: '80%' }}>
        <Avatar
          className="w-100 h-100 mt-10 text-large justify-center self-center "
          src={user?.photoURL}
          alt="User avatar"
        />
        <Spacer y={10}/>
        <Divider/>
        <Spacer y={20}/>
        <form className="ml-10 mr-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            {fields.map((field, i) => {
              return (
                <BorderedInput 
                  key={i}
                  type={field.type ? field.type : "text"}
                  label={field.label}
                  setState={field.setState}/>
              );
            })}
              <Button
                color="primary"
                variant="shadow"
                onPress={forgotPassword}>
              Reset Password
              </Button>
              <Button
                color="primary"
                variant="shadow"
                onPress={updateInfo}>
              Update
              </Button>
          </div>
        </form>
        <Spacer y={20}/>
      </Card>
    </div>
  );
}