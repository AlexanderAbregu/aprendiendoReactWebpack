import React from "react";

import FotoMascota from "./fotoMascota.jsx";
import CamposMascota from "./camposMascota.jsx";

class FilaLista extends React.Component{
	render() {
			const mascotas = this.props.data.map((pet) => (
				// Todos los elementos en un "repeat" tienen  que tener una unica key
				<div key={pet.id} className="filaMascota">
					<div className="fotoMascota">
						<FotoMascota data={pet}/>
					</div>
					<div className="camposMascota">
						<CamposMascota data={pet}/>
					</div>
				</div>
			))
			return (
				<div>{mascotas}</div>
			);
		}
}

export default FilaLista;
