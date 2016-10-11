import React from "react";

import FotoMascota from "./fotoMascota.jsx";
import CamposMascota from "./camposMascota.jsx";

class FilaLoca extends React.Component{
	render(){
		return	(
				<div className="filaMascota">
					<div className="fotoMascota">
						<FotoMascota data={this.props.pet}/>
					</div>
					<div className="camposMascota">
						<CamposMascota data={this.props.pet}/>
					</div>
				</div>
			);
	}
}

class FilaLista extends React.Component{
	componentDidUpdate(){
  		console.log("Filtro:" + this.props.filtro);
   	}

	render() {
			var mascotas = this.props.data.map((pet) => (
				// Todos los elementos en un "repeat" tienen  que tener una unica key
				<FilaLoca key={pet.id} pet={pet}/>
			))
			return (
				<div>{mascotas}</div>
			);
		}
}

export default FilaLista;
