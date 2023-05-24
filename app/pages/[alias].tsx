"use client";
import React, {useEffect, useState} from "react";
import { Button, Htag, Ptag, Raiting, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";


function Course(): JSX.Element {
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
            const { data: page } = await axios.post(
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
			
		</>
	);
}

export default withLayout(Course);