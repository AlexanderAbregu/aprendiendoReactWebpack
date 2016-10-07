import React from "react";
import BuscadorMascota from "./subcomponentes/buscadorMascota.jsx";

class ListaMascota extends React.Component{
	render(){
		return (
				<div className="center100p bordered paddTopBot">
					<div>Lista de Mascotas.</div>
					<BuscadorMascota />
				</div>
			);
		}
}

export default ListaMascota;