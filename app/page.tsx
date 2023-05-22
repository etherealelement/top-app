"use client";
import React, { useEffect, useState } from "react";
import { Button, Htag, Ptag, Raiting, Tag } from "./components";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);


	return (
		<>
			<Htag tag={"h3"}>3</Htag>
			<Button
				appearance="primary"
				arrow="right"
			>
				Узнать подробнее
			</Button>
			<Button appearance="ghost" arrow="right">
				Узнать подробнее
			</Button>
			<Ptag size="small">Напишу сразу</Ptag>
			<></>
			<Tag size="s" color={"red"}>
				Small
			</Tag>
			<Tag size="s" color={"primary"}>
				Small
			</Tag>
			<Raiting raiting={rating} key={2} isEditable setRaiting={setRating}>
			</Raiting>
			</>
	);
}
