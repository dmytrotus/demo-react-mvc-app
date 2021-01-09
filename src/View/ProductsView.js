import React from 'react';

export function ProductsView(props){

	const products = props.products;

	return(
		<ul>
		{products.map(el => 
			<li key={el.id}>{el.name} 
				<button onClick={() => props.deletePdt(el.id)}>Удалить</button>
			</li>
		)}
		</ul>
	)
}