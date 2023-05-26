"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopPageAdvantage, TopPageModel } from "./page.props";

const Page = (): JSX.Element => {
	const [pages, setPages] = useState<TopPageAdvantage[]>([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const {data: tags} = await axios.get<TopPageModel>(
					process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/photoshop"
				);
				console.log(tags)
				setPages(tags.advantages);
			} catch (error) {
				alert(error);
			}
		};
		loadData();
	}, []);

	return <div>
		<ul>{pages.length}</ul>
	</div>;
};

export default Page;
