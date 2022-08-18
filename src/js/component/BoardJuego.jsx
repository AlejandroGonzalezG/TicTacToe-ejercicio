import React from "react";

const estiloRow = {
	display: "grid",
	justifyContent: "center",
	marginTop: "10px",
	color: "white",

}

const estiloContainer2 = {
	textAlign: "center",
}

const estiloH1 = {
	justifyContent: "center",
	display: "grid",
	marginBottom: "50px"
}

const estiloColumna1 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderLeftWidth: "0px",
	borderTopWidth: "0px",
	paddingTop: "70px"
}
const estiloColumna2 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderTopWidth: "0px",
	paddingTop: "70px"

}
const estiloColumna3 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderRightWidth: "0px",
	borderTopWidth: "0px",
	paddingTop: "70px"

}
const estiloColumna4 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderLeftWidth: "0px",
	paddingTop: "70px"
}
const estiloColumna5 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	paddingTop: "70px"
}
const estiloColumna6 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	borderBottomColor: "black",
	borderBottomWidth: "1px",
	borderStyle: "solid",
	borderRightWidth: "0px",
	paddingTop: "70px"
}
const estiloColumna7 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderStyle: "solid",
	borderLeftWidth: "0px",
	borderBottomWidth: "0px",
	paddingTop: "70px"
}
const estiloColumna8 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	borderRightColor: "black",
	borderRightWidth: "1px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderStyle: "solid",
	borderBottomWidth: "0px",
	paddingTop: "70px"
}
const estiloColumna9 = {
	width: "300px",
	height: "300px",
	fontSize: "60px",
	borderLeftColor: "black",
	borderLeftWidth: "1px",
	borderTopColor: "black",
	borderTopWidth: "1px",
	borderStyle: "solid",
	borderRightWidth: "0px",
	borderBottomWidth: "0px",
	paddingTop: "70px"
}



const BoardJuego = (props) => {
	return (
		<div className="row" style={estiloRow}>
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto" style={estiloH1} >Tic Tac Toe in React.js</h1>
				<h2 className="titulo2" style={estiloH1}>Its is {props.jugada} turn!</h2>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna1}></div>
					<div className="col-4" style={estiloColumna2}></div>
					<div className="col-4" style={estiloColumna3}></div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna4}></div>
					<div className="col-4" style={estiloColumna5}></div>
					<div className="col-4" style={estiloColumna6}></div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna7}></div>
					<div className="col-4" style={estiloColumna8}></div>
					<div className="col-4" style={estiloColumna9}></div>
				</div>
			</div>
		</div>
	);
};

export default BoardJuego;