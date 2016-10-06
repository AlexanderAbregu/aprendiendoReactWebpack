import React from "react";
import ReactDOM from "react-dom";

class ClaseHolaMundo extends React.Component{
	constructor(props){
		super(props);
		// Estados, (solo se definen en el interior del componente)
		this.state = {
			segundoApellido: "Abregu",
			mensaje: "Clickea el boton si tenes hu... e.e",
			cambiosEnProps: [],
			sumar: 0
		};

		// Metodo principal para hacer cambios en la interfaz de usuario
		// Establezco el this de la funcion como el this de React (creo)
		this.update = this.update.bind(this);
		this.sumar = this.sumar.bind(this);
	}

	// Se comunica con this.update para actualizar
	update(){
		this.setState({mensaje: "Que Jirafas haces por aca?"});
	}

	sumar(){
		this.setState({sumar: this.state.sumar+1});
	}

	// Se ejecuta cuando el componente se va a montar (constructor() se ejecuta antes que esto)
	componentWillMount(){
		this.setState({montando: new Date().getTime()})
	}

	// Se ejecuta inmediatamente despues de que sea montado el DOM, se suele utilizar para hacer peticiones AJAX o para integrar con otras bibliotecas
	componentDidMount(){
		this.setState({seMonto: new Date().getTime()})
	}

	// Se ejecuta cada vez que un componente recibe  nuevas "props". NO se invoca en el primer render
	componentWillReceiveProps(nextProps){
		// MODIFICAR ESTO.
		// La idea es que cada vez que cambie una propiedad pushee en un array ALGO
		//this.setState({cambiosEnProps: this.state.cambiosEnProps.push("Cambio a la " + ( new Date().getTime() ) ) })
		console.log('nextProps ',nextProps.name);
    		console.log('props ',this.props.name);
    		console.log(this.state.cambiosEnProps);
	}

	// Se ejecuta antes del render para PREGUNTAR si debe o no ejecutar
	// Siempre devuelve true pero si retornara false no se va a ejecutar el render  y no volvera  a comprobar hasta que ocurra otro cambio en props o states
	// Cada vez que ejecute sumar va a pasar por aca
	shouldComponentUpdate( nextProps, nextState ){
    		// Si el nuevo numero es para retornara true y renderizara el DOM caso contrario le kb
    		return nextState.sumar % 2 == 0;
  	}

  	// Se invoca antes que render, se suele utilizar para realizar procesos que que se necesita ejecutar antes de una actualizacion
  	// No se debe utilizar this.setState() ya que generaria un bucle "infinito"
  	componentWillUpdate(){
  		// Propiedades
  		console.log("\n\t Inicio Update: " + new Date().getTime() + "\n");
   	}

   	// Se invoca despues que el render. Osea despues de que el componente cambio
   	// No se debe utilizar this.setState() ya que generaria un bucle "infinito"
   	componentDidUpdate(prevProps,prevState){
    		console.log("\n\t Fin Update: " + new Date().getTime() + "\n");
  	}

  	// Se invoca antes de que un componente sea desmontado del DOM
  	componentWillUnmount(){
  		this.setState({inicioDesmontaje: new Date().getTime()});
  	}

  	// No llamar a las funciones mount y unmount
  	mount(){
    		ReactDOM.render(<MyComponent />,document.getElementById('component'));
  	}

  	unmount(){
    		ReactDOM.unmountComponentAtNode(document.getElementById('component'));
 	}

	render(){
		//Todas las etiquetas tienen que cerrarse o autocerrarse <br/>
		return (<div>
				<div> Empiezo Montar: {this.state.montando} </div>
				<div> Termino Montar: {this.state.seMonto} </div>
				<br/>
				<div> Inicio Desmontaje: {this.state.inicioDesmontaje} </div>
				<div> Fin Desmontaje: {this.state.finDesmontaje} </div>
				<br/>
				<div> Ola ke ace {this.props.name} {this.props.apellido} {this.state.segundoApellido}! </div>
				<br/>
				<div> {this.state.mensaje} </div>
				<br/>
				<button onClick={this.update}>Clickeame</button>
				<button onClick={this.sumar}>{this.state.sumar}</button>
			</div>)
		// onClick={this.update} Ejecuta la funcion update() que CREO que va al constructor y actualiza o algo asi
	}
}

// Propiedades
ClaseHolaMundo.defaultProps = {
	apellido: "Armua"
}

ReactDOM.render(
	<ClaseHolaMundo name="Alexander" />,
	document.getElementById("contenedorReact")
)

/*
//Para el componentWillReceiveProps pero el push se convierte en undefined despues de su primera ejecucion
ReactDOM.render(
	<ClaseHolaMundo name="Alexander 2" />,
	document.getElementById("contenedorReact")
)

ReactDOM.render(
	<ClaseHolaMundo name="Alexander 3" />,
	document.getElementById("contenedorReact")
)
*/