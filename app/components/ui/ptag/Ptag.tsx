import React from "react";
import { PtagProps } from "./ptag.props";
import cn from "classnames";
import styles from "./ptag.module.css";

export const Ptag = ({
	children,
	size,
	className,
	...props
}: PtagProps): JSX.Element => {
	return (
		<>
			<p
				className={cn(styles.p, className, {
					[styles.defaultSize]: size === "default",
					[styles.bigSize]: size === "big",
					[styles.smallSize]: size === "small",
				})}
				{...props}
			>
				{children}
			</p>
		</>
	);
};
