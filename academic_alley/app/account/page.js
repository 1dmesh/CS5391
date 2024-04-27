"use client"
import React from "react";
import { Card, Avatar, Input, Button } from "@nextui-org/react";

import { userInstance } from "@/components/firebase"

export default function Account() {
  const [email, setEmail] = React.useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const userInfo = (key) => {
    console.log(userInstance())
    //console.log(userInstance()[key])
    return userInstance()[key]
  }

  return (
    <div style={{ height: '100%', width: '100%' }} className="flex flex-wrap content-center justify-center">
      <Card style={{ height: '80%', width: '80%' }}>
        <Avatar
          className="w-100 h-100 mt-10 text-large justify-center self-center "
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5938d67e24c517f0803cf6aaa1ead65938a1256ac256c73faa48491781d4b32?apiKey=6428492ccfa04507ac0d21f77fdf7e58&"
          alt="User avatar"
        />
        <form className="ml-10 mr-10" onSubmit={handleSubmit}>
          <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <Input
              isRequired
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder={userInfo('email')}
              onChange={(e) => setEmail(e.target.value)}/>
            <Input
            
            />
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