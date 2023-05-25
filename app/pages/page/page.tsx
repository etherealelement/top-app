"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopPageAdvantage, TopPageModel } from "./page.props";

const Page = (): JSX.Element => {
	const [pages, setPages] = useState<TopPageAdvantage[]>([]);

	useEffect(() => {
		const loadData = async () => {
			const {data: tags} = await axios.get<TopPageModel>(
				process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/photoshop"
			);
			setPages(tags.advantages);
		};
		loadData();
	}, []);

	return <div>
		<ul>{pages.length}</ul>
	</div>;
};

export default Page;
