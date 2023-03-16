import React from "react";
import { List, Consult, Rental } from "../components/list";
import Slide from "../components/banner";

export default function Home() {
  return (
    <>
      <Slide />
      <List />
      <Rental />
      <Consult />
    </>
  );
}
