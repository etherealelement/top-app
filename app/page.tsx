"use client";
import React, { useEffect, useState } from "react";
import { Button, Htag, Ptag, Raiting, Tag } from "./components";
import { withLayout } from "./layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "./interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

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
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post("https://courses-top.ru/api/top-page/find", {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
