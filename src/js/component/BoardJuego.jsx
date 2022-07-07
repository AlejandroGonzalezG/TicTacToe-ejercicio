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




const BoardJuego = (props) => {
	return (
		<div className="row" style={estiloRow}>	
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto" style={estiloH1} >Tic Tac Toe in React.js</h1>
                <h2 className="titulo2" style={estiloH1}>Its is {props.setJugada} turn!</h2>
			</div>
				
		</div>
	);
};

export default BoardJuego;