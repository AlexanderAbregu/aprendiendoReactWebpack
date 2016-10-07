import React from "react";

class CampoMascota extends React.Component{
	render() {
		var estiloColorMascota = {
			backgroundColor: this.props.data.color
		};
		return (
				<div>
					<div className="nombreMascota boldLetra">
						{this.props.data.name} ( {this.props.data.age} )
					</div>
					<br/>
					<div className="tipoMascota mitad">
						{this.props.data.tipe}
					</div>
					<div className="colorMascota mitad boldLetra" style={estiloColorMascota}>
						{this.props.data.color}
					</div>
				</div>
			);
		}
}

export default CampoMascota;
