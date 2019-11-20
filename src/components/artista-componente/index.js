import React, { Component } from 'react';
import PainelArtista from '../painel-artista-imagem/index'
import PainelArtistaDetalhes from './../painel-artista-detalhes/index'
import PainelArtistaConteudo from './../painel-artista-conteudo/index'
import "bootstrap/dist/css/bootstrap.css";

class ArtistaComponente extends Component {
	render() {

		return (
			<div >
				<PainelArtista>
				</PainelArtista>
				<br />
				<div className="container-fluid">
					<hr />
					<PainelArtistaDetalhes>
					</PainelArtistaDetalhes>
					<hr />
					<PainelArtistaConteudo>
					</PainelArtistaConteudo>
				</div>
			</div>
		);
	}
}

export default ArtistaComponente;