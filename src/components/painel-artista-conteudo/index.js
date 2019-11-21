import React, { Component } from 'react';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class PainelArtistaConteudo extends Component {

	state = {
		arrAlbuns: []
	}

	async componentDidMount() {
		await this.getDataFromApi();
	}

	getDataFromApi = async () => {
		try {

			// Pegar os albuns que serão listados
			let objResponse = await axios.get(
				'https://itunes.apple.com/lookup?id=278873078&entity=album&limit=2'
			);

			let arrAlbumsSongs = [];
			let arrApiAlbumsList = [];
			arrApiAlbumsList = objResponse.data.results;
			arrApiAlbumsList.shift();

			arrApiAlbumsList.map((album) => {
				const {
					artistName,
					collectionName,
					collectionId,
					trackCount,
					artworkUrl100
				} = album;

				axios.get(
					`https://itunes.apple.com/it/search?term=${collectionName}&entity=song`
				).then((objResponse2) => {

					let arrDataAlbums = {
						id: Date.now(),
						artistName,
						collectionName,
						trackCount,
						artworkUrl100,
						arrSongs: []
					}

					// Filtra só oque é do album selecionado
					arrDataAlbums.arrSongs = objResponse2.data.results.filter(data => {
						return (
							data.collectionId == collectionId
						);
					});

					arrAlbumsSongs.push(arrDataAlbums);

					this.setState({ arrAlbums: arrAlbumsSongs});
				});
			});
		} catch (error) {
			this.setState({
				arrAlbums: []
			});

			console.error('Houve um erro ao recuperar os dados da api', error);
		}
	}

	render() {

		const { arrAlbuns: arrDataList } = this.state;

		return (
			<div>
				{arrDataList.map((item) => (
					<div key={item.id} className='row'>
						<div className='col-sm-3'>
							<img
								className="img-fluid ajustar-imagem-api"
								alt="foto de um artista"
								src={item.artworkUrl100}
							/>
							<p>
								<small> {item.trackCount} músicas</small>
							</p>
							<hr />
							<section>
								<small>
									<strong>Editors' notes</strong>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus eros eget ligula fringilla, id mattis nisl pretium. Nulla pharetra nulla ac nisi dapibus pellentesque. Nulla sem nisl, tincidunt nec viverra sit amet, commodo sed nunc. Nullam suscipit imperdiet enim a pretium. Phasellus fermentum lorem pretium condimentum sollicitudin. Quisque vel augue ultrices, molestie risus ut, blandit urna.
									</p>
								</small>
							</section>
						</div>
						<div className='col-sm-9'>
							<h3> {item.artistName}: {item.collectionName}  </h3>
							<br />
							<ul className="list-group list-group-flush">
								{item.arrSongs.map((musicItem, id) => (
									<li key={id} className="list-group-item">
										<div className='row'>
											<div className='col-sm-2'>
												<img
													className="img-fluid rounded img-item-lista-musicas"
													alt="foto de um artista"
													src={musicItem.artworkUrl100}
												/>

											</div>
											<div className='col-sm-8'>
												<p><small>{musicItem.trackName}</small></p>
												<audio controls>
													<source src={musicItem.previewUrl} type="audio/mp4" />
												</audio>

											</div>
											<div className='col-sm-2 text-align-right'>
												<p><small>{(musicItem.trackTimeMillis / 60000).toFixed(2)}</small></p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default PainelArtistaConteudo;