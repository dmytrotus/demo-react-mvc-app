import React, { useState, useEffect } from 'react';
import { Products } from '../Model/ProductsModel';

export function ProductsView(){

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

	return(
		<ul>
		{products.map(el => 
			<li key={el.id}>{el.name} 
				<button onClick={() => deletePdt(el.id)}>Удалить</button>
			</li>
		)}
		</ul>
	)
}