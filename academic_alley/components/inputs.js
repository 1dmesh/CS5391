'use client'
import React from "react";
import {
    Input
} from "@nextui-org/react";

export function InputWithState({
  type = "text",
  setState,
  ...props
}) {
  return (
    <Input
      {...props}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export function BorderedInput(props) {
  return (
    <InputWithState
      variant="bordered"
      {...props}
    />
  );
}

export function FadedInput(props) {
  return (
    <InputWithState
      variant="faded"
      {...props}
    />
  );
}

export function FlatInput(props) {
  return (
    <InputWithState
      variant="flat"
      {...props}
    />
  );
}

export function UnderlinedInput(props) {
  return (
    <InputWithState
      variant="underlined"
      {...props}
    />
  );
}

module.exports = {
  InputWithState,
  BorderedInput,
  FadedInput,
  FlatInput,
  UnderlinedInput
}