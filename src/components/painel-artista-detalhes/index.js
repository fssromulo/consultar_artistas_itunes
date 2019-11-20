import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
// import './styles.css';

class PainelArtistaDetalhe extends Component {

	render() {
		return (
			<div className='row'>
				<div className='col-sm-8'>
					<h1>Bruno Mars</h1>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus eros eget ligula fringilla, id mattis nisl pretium. Nulla pharetra nulla ac nisi dapibus pellentesque. Nulla sem nisl, tincidunt nec viverra sit amet, commodo sed nunc. Nullam suscipit imperdiet enim a pretium. Phasellus fermentum lorem pretium condimentum sollicitudin.
						Quisque vel augue ultrices, molestie risus ut, blandit urna. Nunc vitae molestie nisl, eu ultricies nisl. Sed euismod cursus mi, eget convallis felis efficitur eget. Mauris sit amet leo interdum, tincidunt tortor vitae, faucibus eros. Pellentesque elit libero, lacinia ut augue a, lobortis elementum dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend dui magna, id rutrum sem rhoncus id. Nulla interdum vitae felis et ullamcorper.
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
									New Orleans, La
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className='row'>
								<div className='col-xs-12'>
									<small>Genre:</small>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-12'>
									Hip Hop

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
									Sep 27, 1982
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