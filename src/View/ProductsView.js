import React from 'react';

export function ProductsView(props){

	const products = props.products;
	const deletePdt = props.deletePdt;

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