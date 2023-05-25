"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductModel } from "./product.props";

const Product = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const loadProduct = async () => {
			const product = await axios.post<ProductModel>(
				process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find", {
                   limit: 10,
                }
			);
			console.log(product);
		};
        loadProduct();
	}, []);

	return <>cre</>;
};

export default Product;
