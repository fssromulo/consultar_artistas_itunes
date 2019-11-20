import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './styles.css';

class PainelArtista extends Component {
	render() {
		return (
			<div>
				<img
					className="img-fluid painel-artista"
					alt="foto de um artista"
					src="https://observatoriodemusica.bol.uol.com.br/wp-content/uploads/2018/07/cardi-b-e-bruno-mars.png"
				/>
			</div>
		);
	}
}

export default PainelArtista;