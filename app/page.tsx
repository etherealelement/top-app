"use client";
import React, { useEffect, useState } from "react";
import { Button, Htag, Ptag, Raiting, Tag } from "./components";
import axios from "axios";

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	const [items, setItems] = useState([]);
	useEffect(() => {
		const loadData = async () => {
			const firstCategory = 0;
			const { data: menu } = await axios.post(
				process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
				{
					firstCategory,
				}
			);
			setItems(menu);
		};
		loadData();
	}, []);

	return (
		<>
			<Htag tag={"h3"}>3</Htag>
			<Button appearance="primary" arrow="right">
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
			<Raiting
				raiting={rating}
				key={234}
				isEditable
				setRaiting={setRating}
			></Raiting>
			<ul> 
				{items.map((items:any)=> <li key={items._id.secondCategory}>{items._id.secondCategory}</li>)}
			</ul>
		</>
	);
}

export default Home;
