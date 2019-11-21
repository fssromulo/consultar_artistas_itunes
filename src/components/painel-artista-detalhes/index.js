import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
// import './styles.css';

class PainelArtistaDetalhe extends Component {

	render() {
		return (
			<div className='row'>
				<div className='col-sm-8'>
					<h1>Bruno Mars</h1>
					<p>
						Peter Gene Hernandez (Honolulu, 8 de outubro de 1985), mais conhecido pelo nome artístico Bruno Mars é um cantor, compositor, produtor musical, dançarino e multi-instrumentista americano, nascido e criado no Havaí.
						O álbum intitulado "Unorthodox Jukebox", foi lançado em 11 de dezembro de 2012, do qual o primeiro single, a música "Locked Out of Heaven", foi lançado em 1 de outubro. No dia 13 de dezembro de 2012, "Locked Out of Heaven" assumiu a 1ª posição da Billboard Hot 100 e da Hot Digital Songs, graças a seu crescimento nas vendas digitais de 46% em relação a semana anterior. "Locked Out of Heaven" tornou Mars o artista masculino com o maior número de singles número um no menor período de tempo na parada desde 1964, quando Bobby Vinton registrou o mesmo recorde. <small>(Fonte: Wikipidia, 2019)</small>
					</p>
				</div>
				<div className='col-sm-4'>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className='row'>
								<div className='col-xs-12'>
									<small>Origin:</small>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-12'>
									Honolulu, Havaí
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-xs-12'>
									<small>Genre(s):</small>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-12'>
									Pop, Hip hop, Pop rock, Funk, Disco, Soul, New jack, Swing, Rock
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-xs-12'>
									<small>Born:</small>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-12'>
									Out 8, 1985
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div >
		);
	}
}

export default PainelArtistaDetalhe;