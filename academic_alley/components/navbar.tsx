"use client"
import React from "react"
import NextLink from "next/link";
import clsx from "clsx";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
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
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarContent>
          <NavbarMenuToggle/>
          <NavbarBrand>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
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
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
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
