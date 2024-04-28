"use client"
import React from "react";
import { Card, Avatar, Input, Button } from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth"

import { authInstance } from "@/components/firebase"
import { FlatInput } from "@/components/inputs";

export default function Account() {
  const [user, setUser] = React.useState()

  onAuthStateChanged(authInstance(), (u) => {
    setUser(u)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ height: '100%', width: '100%' }} className="flex flex-wrap content-center justify-center">
      <Card style={{ height: '80%', width: '80%' }}>
        <Avatar
          className="w-100 h-100 mt-10 text-large justify-center self-center "
          src={user?.photoURL}
          alt="User avatar"
        />
        <form className="ml-10 mr-10" onSubmit={handleSubmit}>
          <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <FlatInput
              isRequired
              isClearable
              type="email"
              label="Email"
              placeholder={user?.email}
              setState={() => console.log("not implemented")}/>
            <FlatInput
              isRequired
              isClearable
              label="Test"
              placeholder={user?.displayName}
              setState={() => console.log("not implemented")}/>
          </div>
          <div className="flex gap-5 mt-3.5 max-md:flex-wrap max-md:max-w-full">
            <Input
            
            />
            <Input
            
            />
          </div>
          <div className="flex gap-5 mt-4 max-md:flex-wrap max-md:max-w-full">
            <Input
            
            />
            <Input
            
            />
          </div>
          <div className="flex gap-5 mt-4 max-md:flex-wrap max-md:max-w-full">
            <Input
            
            />
            <Input
            
            />
          </div>
          <div className="flex gap-5 mt-10 ml-4 w-full max-md:ml-2.5">
            <Button
              size="sm"
              variant="solid"
              color="primary"
              className="flex-1 justify-center"
            >
              Change Photo
            </Button>
            <Button
              type="submit"
              size="sm"
              variant="solid"
              color="primary"
              className="flex-1 justify-center whitespace-nowrap"
            >
              Update
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}