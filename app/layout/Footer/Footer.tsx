import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
			<a className={styles.footerLink}>Пользовательское соглашение</a>
			<a className={styles.footerLink}>Политика конфиденциальности</a>
		</footer>
	);
};
