import React, { Component } from 'react';

const Favorites = (props) => {

	const { favorites } = props;
	const userFavs = favorites.map((fav) => {
		return (
		<ul>
			<li>{fav}</li>
		</ul>
			);

	});

	return (
		<div className="Favorites">
		<h2>Favorites</h2>
		{userFavs}
		</div>

		);

}

export default Favorites;