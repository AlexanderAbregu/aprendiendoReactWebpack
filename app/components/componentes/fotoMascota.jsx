import React from "react";

class FotoMascota extends React.Component{
	render() {
		return (
				// Todos los elementos en un "repeat" tienen  que tener una unica key
				<img className="imagenMascota" src={this.props.data.picture}/>
			);
		}
}

export default FotoMascota;
