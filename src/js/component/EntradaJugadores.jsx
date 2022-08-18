import React from "react";

const estiloRow = {
	display: "grid",
    justifyContent: "center",
	marginTop: "10px",
	color: "white",
	
}

const estiloContainer2 = {
	textAlign : "center",
}

const estiloH1 = {
	justifyContent: "center",
	display: "grid",
	marginBottom: "50px"
}

const estiloH2 = {
	display: "grid",
	justifyContent: "center",
	marginBottom: "30px",
	color: "white",
	backgroundColor: "#433C3A"
}

const estiloBoton1 = {
	width: "100px",
	height: "120px",
	fontSize: "60px",
	margin: "30px",
	color: "#C4C65D",
	textAlign: "center",
	backgroundColor: "#464240"
}

const estiloBoton2 = {
	width: "100px",
	height: "120px",
	fontSize: "60px",
	margin: "40px",
	color: "#4BAEE6",
	textAlign: "center",
	backgroundColor: "#464240"
}

const estiloDiv = {
	backgroundColor: "#433C3A",
	width: "650px",
	textAlign: "center",
}


//create your first component
const EntradaJugadores = (props) => {

	return (
		<div className="row" style={estiloRow}>	
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto" style={estiloH1} >Tic Tac Toe in React.js</h1>
					<h2 className="titulo2" style={estiloH1}>Pick a weapon!</h2>
			</div>
			<div className="contenedor" style={estiloDiv}>
				<h2 style={estiloH2}>Choose your weapon</h2>
				<input type="text" placeholder="Username Player 1" onChange={props.handleChange1}></input>
				<input type="text" placeholder="Username Player 2" onChange={props.handleChange2}></input>
				
			</div>
			<div className="container"  style={estiloDiv}>
				<button onClick={() => props.setJugada("X")} className="elegir1" style={estiloBoton1}>X</button>
				<button onClick={() => props.setJugada("O")} className="elegir2" style={estiloBoton2}>O</button>
			</div>		
		</div>
	);
};

export default EntradaJugadores;
