import React from "react";

class BuscadorMascota extends React.Component{
	constructor(props) {
   		super(props);
    		this.state = {
    			value: ""
    		};
    		this.handleChange = this.handleChange.bind(this);
  	}

 	 handleChange(event) {
    		this.setState({
    			value: event.target.value
    		});
  	}
	componentWillUpdate(a){
  		//console.log(this.state.value);
   	}
   	componentDidUpdate(a){
  		//console.log(this.state.value);
   	}
	render(){
		return (
				<div className=" paddTopBot">
					<input type="text" placeholder="Nombre" onChange={this.handleChange} />
					<select type="text" placeholder="Tipo">
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="lion">Lion</option>
					</select>
				</div>
			);
		}
}

export default BuscadorMascota;