import React from "react";
import BuscadorMascota from "./subcomponentes/buscadorMascota.jsx";

class ListaMascota extends React.Component{
	constructor(props){
		super(props);
		// Estados, (solo se definen en el interior del componente)
		this.state = {
			value: ""
		};

		// Metodo principal para hacer cambios en la interfaz de usuario
		// Establezco el this de la funcion como el this de React (creo)
		this.filtrar = this.filtrar.bind(this);
	}

   	filtrar(){
		this.setState({value: this.refs.buscador1.state.value});
	}

	render(){
		return (
				<div className="center100p bordered paddTopBot">
					<div>Lista de Mascotas.</div>
					<BuscadorMascota ref="buscador1" />
					<button onClick={this.filtrar}>Buscar 1</button>
				</div>
			);
		}
}

export default ListaMascota;