import React, { Component } from 'react';
import PainelArtista from '../painel-artista-imagem/index'
import PainelArtistaDetalhes from './../painel-artista-detalhes/index'
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class PainelArtistaConteudo extends Component {
	render() {

		return (
			<div className='row'>
				<div className='col-sm-3'>
					<img
						className="img-fluid "
						alt="foto de um artista"
						src="https://upload.wikimedia.org/wikipedia/pt/7/79/Capa_de_Unorthodox_Jukebox_por_Bruno_Mars.jpg"
					/>
					<p>
						<small> 25 músicas</small>
					</p>
					<hr />
					<p>
						<small>
							<strong>Editors' notes</strong>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus eros eget ligula fringilla, id mattis nisl pretium. Nulla pharetra nulla ac nisi dapibus pellentesque. Nulla sem nisl, tincidunt nec viverra sit amet, commodo sed nunc. Nullam suscipit imperdiet enim a pretium. Phasellus fermentum lorem pretium condimentum sollicitudin. Quisque vel augue ultrices, molestie risus ut, blandit urna.
												</p>
						</small>
					</p>

				</div>
				<div className='col-sm-9'>
					<h3> Bruno Mars: Unorthodox Jukebox  </h3>
					<br />
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className='row'>
								<div className='col-sm-2'>
									<img
										className="img-fluid rounded img-item-lista-musicas"
										alt="foto de um artista"
										src="https://upload.wikimedia.org/wikipedia/pt/7/79/Capa_de_Unorthodox_Jukebox_por_Bruno_Mars.jpg"
									/>

								</div>
								<div className='col-sm-8'>
									<p><small>Nome da musica 1</small></p>
									<p><small>Nome do artista</small></p>
								</div>
								<div className='col-sm-2 text-align-right'>
									<p><small>4:37</small></p>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-sm-2'>
									<img
										className="img-fluid rounded img-item-lista-musicas"
										alt="foto de um artista"
										src="https://upload.wikimedia.org/wikipedia/pt/7/79/Capa_de_Unorthodox_Jukebox_por_Bruno_Mars.jpg"
									/>


								</div>
								<div className='col-sm-8'>
									<p><small>Nome da musica 1</small></p>
									<p><small>Nome do artista</small></p>
								</div>
								<div className='col-sm-2 text-align-right'>
									<p><small>4:37</small></p>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-sm-2'>
									<img
										className="img-fluid rounded img-item-lista-musicas"
										alt="foto de um artista"
										src="https://upload.wikimedia.org/wikipedia/pt/7/79/Capa_de_Unorthodox_Jukebox_por_Bruno_Mars.jpg"
									/>


								</div>
								<div className='col-sm-8'>
									<p><small>Nome da musica 1</small></p>
									<p><small>Nome do artista</small></p>
								</div>
								<div className='col-sm-2 text-align-right'>
									<p><small>4:37</small></p>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-sm-2'>
									<img
										className="img-fluid rounded img-item-lista-musicas"
										alt="foto de um artista"
										src="https://upload.wikimedia.org/wikipedia/pt/7/79/Capa_de_Unorthodox_Jukebox_por_Bruno_Mars.jpg"
									/>


								</div>
								<div className='col-sm-8'>
									<p><small>Nome da musica 1</small></p>
									<p><small>Nome do artista</small></p>
								</div>
								<div className='col-sm-2 text-align-right'>
									<p><small>4:37</small></p>
								</div>
							</div>
						</li>

					</ul>
				</div>
			</div>
		);
	}
}

export default PainelArtistaConteudo;