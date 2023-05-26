"use client";
import React, { useEffect, useState } from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import axios from "axios";
import Link from "next/link";
import { MenuItem } from "../../interfaces/menu.interface";


export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	const [menuItem, setMenuItem] = useState([]);

	useEffect(() => {
		const loadMenu = async () => {
			const firstCategory = 0;
			const { data: menu } = await axios.post(
				process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
				{
					firstCategory,
				}
			);
            setMenuItem(menu);
            // console.log(menu);
		};
        loadMenu();
	});

	return <div {...props}>
        <ul>
            {menuItem.map((item: MenuItem)=> {
                return <li className = {styles.sideBar} key={item._id.secondCategory}><Link key={item._id.secondCategory} href="/pages/page">{item._id.secondCategory}</Link></li>;
            })}
        </ul>
    </div>;
};
