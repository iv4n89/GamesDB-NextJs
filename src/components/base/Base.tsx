import { Container } from "@mui/material";
import React from "react";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Base = ({ children }: Props) => {
  return <Container maxWidth="sm">{ children }</Container>;
};
