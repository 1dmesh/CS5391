/*
Images:
https://www.flaticon.com/free-icon/graduate-hat_3561639?term=academic&page=1&position=12&origin=search&related_id=3561639
*/
"use client"
import React from "react"
import NextLink from "next/link";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Image,
  Spacer,
} from "@nextui-org/react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation'

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { ChevronDown } from "@/components/icons";
import { Logo } from "@/components/icons";

import { 
  authInstance, 
  logout as firebaseLogout
} from "@/components/firebase"

function UserButton() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [profileURL, setProfileURL] = React.useState("")
  const router = useRouter()

  onAuthStateChanged(authInstance(), (user) => {
    if(user) {
      setIsLoggedIn(true)
      setProfileURL(user.photoURL ? user.photoURL : "")
    } else {
      setIsLoggedIn(false)
    }
  });

  const signin = () => {
    router.push("/signin")
  }
  const signup = () => {
    router.push("/signup")
  }

  const dropdownAction = (key) => {
    if (key == "logout") {
      firebaseLogout();
      router.push("/")
    } else if (key == "account") {
      router.push("/account")
    }
  }

  return (
    <>
      {
        isLoggedIn && (
          <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Avatar src={profileURL} size="md"/>
              </DropdownTrigger>
            <DropdownMenu onAction={(key) => dropdownAction(key)}>
              <DropdownItem key="account">
                Account
              </DropdownItem>
              <DropdownItem key="logout">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )
      }
      {
        !isLoggedIn && (
          <>
            <Button onClick={signin}>
              Sign In
            </Button>
            <Button onClick={signup}>
              Sign Up
            </Button>
          </>
        )
      }
    </>
  );
}

export const Navbar = () => {

  return (
    <NextUINavbar isBordered maxWidth="2xl" position="sticky">
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarContent>
          <NavbarMenuToggle/>
          <NavbarBrand>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              {/*<Logo />*/}
              <Spacer x={2}/>
              <Image
                alt="Logo"
                src="/graduate-hat.png"
                width={36}
                height={36}/>
              <Spacer x={2}/>
              <p className="font-bold text-inherit">Academic Alley</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        {siteConfig.navDropdowns.map((item) => (
          <Dropdown key={item.label} placement="bottom-start">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  variant="light"
                  radius="sm"
                  endContent={<ChevronDown fill="currentColor" size={14}></ChevronDown>}>
                  {item.label}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              {item.pages.map((page) => (
                <DropdownItem
                  as={NextLink}
                  href={page.href}
                  key={page.href}>
                  {page.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end">
        <ThemeSwitch />
        <UserButton />
      </NavbarContent>
    </NextUINavbar>
  );
};
