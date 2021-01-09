import React, { useState, useEffect } from 'react';
import { Products } from '../Model/ProductsModel';
import { ProductsView } from '../View/ProductsView';

export function ProductsController(){
	const[products, setProducts] = useState([])

	useEffect(() =>{
		Products.getProducts().then(response =>{
			setProducts(response);
		})
	}, [])

	const deletePdt = (id) => {
		//Products.deleteProduct(id)
		const newState = products.filter(el => el.id !== id);
		setProducts(newState);
	}

	return (<ProductsView products={products} deletePdt={deletePdt} />)
}