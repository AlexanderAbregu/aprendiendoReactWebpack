import React from "react";
import $ from "jquery";

class FotoMascota extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			urlImagen: "https://www.repstatic.it/content/nazionale/img/2016/01/15/134809887-8ddc6038-ec16-4b16-ad8a-09e24783e103.jpg"
		};
	}

	componentDidMount(){
		let tag = this.props.data.tipe;
		var numeroAleatorio = Math.floor( Math.random()*20 );
		$.ajax({
			url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json' + `&tags=animals,${tag+"s"}`,
			dataType: "jsonp",
			jsonpCallback: "jsonFlickrFeed",
			cache: false,
			context: this,
			success: function(data){
				console.log("\n\n" + data.items[numeroAleatorio].media.m + "\n\n");
				this.setState({ urlImagen: data.items[numeroAleatorio].media.m })
			}
		})
	}

	render() {

		return (
				// Todos los elementos en un "repeat" tienen  que tener una unica key
				<div>
					<img className="imagenMascota" src={this.state.urlImagen}/>
				</div>
			);
		}
}

export default FotoMascota;