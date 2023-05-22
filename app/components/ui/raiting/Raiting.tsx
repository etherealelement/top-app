"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import StarIcon from "./star-raiting.svg";
import cn from "classnames";

export const Raiting = ({
	isEditable = false,
	raiting,
	className,
	setRaiting,
	...props
}: RaitingProps) => {
	const [raitingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(raiting);
	}, [raiting]);

	const constructRating = (currentRating: number) => {
		const updatedArray = raitingArray.map(
			(item: JSX.Element, i: number) => {
				return (
					<span
						key={i}
						className={cn(styles.star, {
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable,
						})}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(raiting)}
						onClick={() => onClick(i + 1)}
					>
						<StarIcon
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(e: KeyboardEvent<SVGElement>) =>
								isEditable && handleSpace(i + 1, e)
							}
						></StarIcon>
					</span>
				);
			}
		);
		setRatingArray(updatedArray);
	};

	// Change display

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	//  OnClick =)

	const onClick = (i: number) => {
		if (!isEditable || !setRaiting) {
			return;
		}
		setRaiting(i);
	};
	// handle Space
	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != "Space" || !setRaiting) {
			return;
		}
		setRaiting(i);
	};

	return (
		<>
			<div {...props}>
				{raitingArray.map((r, i) => {
					return r;
				})}
			</div>
		</>
	);
};
