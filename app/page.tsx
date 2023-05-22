"use client";
import React, {useState} from "react";
import { Button, Htag, Ptag, Tag } from "./components";

export default function Home():JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
    <Htag tag={"h3"}>{counter}</Htag>
    <Button appearance="primary" arrow="right" onClick={()=> {setCounter(counter + 1)}}>Узнать подробнее</Button>
    <Button appearance="ghost" arrow="right">Узнать подробнее</Button>
    <Ptag size="small" >Напишу сразу</Ptag>
    <></>
    <Tag size="s" color={"red"}>Small</Tag>
    <Tag size="s" color={"primary"}>Small</Tag>
    </>
  );
}
