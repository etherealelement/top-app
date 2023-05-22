import React from "react";
import { Button, Htag } from "./components";

export default function Home():JSX.Element {
  return (
    <>
    <Htag tag={"h3"}>Курсы по Photoshop</Htag>
    <Button appearance="primary" arrow="right">Узнать подробнее</Button>
    <Button appearance="ghost" arrow="right">Узнать подробнее</Button>
    </>
  );
}
