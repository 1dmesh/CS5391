'use client'
import React from "react";
import {
    Input
} from "@nextui-org/react";

function DefaultInput({
  type = "text",
  ...props
}) {
  const setState = props.setState

  return (
    <Input
      {...props}
      variant="bordered"
      className="border-gray-300 rounded-md w-full"
      onChange={(e) => setState(e.target.value)}
    />
  );
}

module.exports = {
  DefaultInput
}