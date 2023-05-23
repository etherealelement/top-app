import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import cn from "classnames";
import styles from "./Layout.module.css";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}></Header>
			<Sidebar className={styles.sidebar}></Sidebar>
			<div className={styles.body}>
				<div>{children}</div>
			</div>
			<Footer className={styles.footer}></Footer>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props}></Component>
			</Layout>
		);
	};
};
