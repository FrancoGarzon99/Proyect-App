import React from 'react';

const Card = ({ items, loading }) => {
	if (loading) {
		return <h2>loading...</h2>;
	}

	return (
		<ul>{items && items.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
	);
};

export default Card;
