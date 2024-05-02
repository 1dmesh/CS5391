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

import { authInstance } from "@/components/firebase"
import { BorderedInput } from "@/components/inputs";

let userData = {
  username: "cs5391",
  email: "cs5391.252@gmail.com",
  address: "601 University Dr",
  city: "San Marcos",
  state: "TX",
  zipcode: 78666,
  firstname: "Test",
  lastname: "Account"
}

export default function Account() {
  const [user, setUser] = React.useState()
  const [email, setEmail] = React.useState()
  const [username, setUsername] = React.useState()
  const [address, setAddress] = React.useState()
  const [city, setCity] = React.useState()
  const [state, setState] = React.useState()
  const [zipcode, setZipcode] = React.useState()
  const [firstname, setFirstname] = React.useState()
  const [lastname, setLastname] = React.useState()

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
  });

  React.useEffect(() => {
    userData['email'] = email
    userData['username'] = username
    userData['address'] = address
    userData['city'] = city
    userData['state'] = state
    userData['zipcode'] = zipcode
    userData['firstname'] = firstname
    userData['lastname'] = lastname
  }, [email, address, username, city, state, zipcode, firstname, lastname])

  const fields = [
    {
      key: "email",
      label: "Email",
      type: "email",
      setState: setEmail
    },
    {
      key: "address",
      label: "Address",
      setState: setAddress
    },
    {
      key: "username",
      label: "Username",
      setState: setUsername
    },
    {
      key: "city",
      label: "City",
      setState: setCity
    },
    {
      key: "firstname",
      label: "First Name",
      setState: setFirstname
    },
    {
      key: "state",
      label: "State",
      setState: setState
    },
    {
      key: "lastname",
      label: "Last Name",
      setState: setLastname
    },
    {
      key: "zipcode",
      label: "Zipcode",
      setState: setZipcode
    },
  ]

  const updateInfo = (e) => {
    alert("Information Updated.")
  }

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
        <div className="ml-10 mr-10">
          <div className="grid grid-cols-2 gap-5">
            {fields.map((field, i) => {
              return (
                <BorderedInput 
                  key={i}
                  type={field.type ? field.type : "text"}
                  label={field.label}
                  defaultValue={userData[field.key]}
                  setState={field.setState}/>
              );
            })}
              <Button
                color="primary"
                variant="shadow"
                onPress={updateInfo}>
              Update
              </Button>
          </div>
        </div>
        <Spacer y={20}/>
      </Card>
    </div>
  );
}