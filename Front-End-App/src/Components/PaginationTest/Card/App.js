import React, { useState, useEffect } from 'react';
import Card from './Components/Card/Card';
// import Home from './Components/Home/Home';
import Pagination from '../Pagination';

const App = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [paginaActual, setpaginaActual] = useState(1);
	const [itemsPorPagina] = useState(10);

	useEffect(() => {
		const Data = async () => {
			setLoading(true);
			const urlData = await fetch('https://jsonplaceholder.typicode.com/posts');
			const dataJson = await urlData.json();
			setItems(dataJson);
			setLoading(false);
		};
		Data();
	}, []);
	// GET CURRENT POSTS
	const indexUltimoItem = paginaActual * itemsPorPagina;
	const indexPrimerItem = indexUltimoItem - itemsPorPagina;
	const ItemsActuales = items.slice(indexPrimerItem, indexUltimoItem);
	//CHANGE PAGE
	const paginate = (num) => setpaginaActual(num);
	return (
		<>
			<div>
				<div>
					<Card items={ItemsActuales} loading={loading} />
					<Pagination
						itemsPorPagina={itemsPorPagina}
						totalItems={items.length}
						paginate={paginate}
					/>
				</div>
			</div>
		</>
	);
};

export default App;
