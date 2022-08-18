import React, { useState } from "react";

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
	const [espacioUno, setEspacioUno] = useState("")
	const [espacioDos, setEspacioDos] = useState("")
	const [espacioTres, setEspacioTres] = useState("")
	const [espacioCuatro, setEspacioCuatro] = useState("")
	const [espacioCinco, setEspacioCinco] = useState("")
	const [espacioSeis, setEspacioSeis] = useState("")
	const [espacioSiete, setEspacioSiete] = useState("")
	const [espacioOcho, setEspacioOcho] = useState("")
	const [espacioNueve, setEspacioNueve] = useState("")
	const [largo, setLargo] = useState([]);

	const handleChangeUno = (e) => {
		if (props.jugada != "O") {
			setEspacioUno("X");
			setLargo([...largo, "X"]);
			props.setJugada("O");
		} else {
			setEspacioUno("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeDos = (e) => {
		if (props.jugada != "O") {
			setEspacioDos("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioDos("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeTres = (e) => {
		if (props.jugada != "O") {
			setEspacioTres("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioTres("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeCuatro = (e) => {
		if (props.jugada != "O") {
			setEspacioCuatro("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioCuatro("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeCinco = (e) => {
		if (props.jugada != "O") {
			setEspacioCinco("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioCinco("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeSeis = (e) => {
		if (props.jugada != "O") {
			setEspacioSeis("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioSeis("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeSiete = (e) => {
		if (props.jugada != "O") {
			setEspacioSiete("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioSiete("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeOcho = (e) => {
		if (props.jugada != "O") {
			setEspacioOcho("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioOcho("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};
	const handleChangeNueve = (e) => {
		if (props.jugada != "O") {
			setEspacioNueve("X")
			setLargo([...largo, "X"]);
			props.setJugada("O")
		} else {
			setEspacioNueve("O")
			setLargo([...largo, "O"]);
			props.setJugada("X")
		}
	};

	return (
		<div className="row" style={estiloRow}>
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto" style={estiloH1} >Tic Tac Toe in React.js</h1>
				<h2 className="titulo2" style={estiloH1}>It's {props.jugada} turn!</h2>
			</div>
			{largo.length > 4 &&
				((espacioUno == espacioDos && espacioUno == espacioTres && espacioUno != "") || (espacioCuatro == espacioCinco && espacioCuatro == espacioSeis && espacioCinco != "") || (espacioSiete == espacioOcho && espacioSiete == espacioNueve && espacioOcho != "") || (espacioUno == espacioCuatro && espacioUno == espacioSiete && espacioCuatro != "") || (espacioDos == espacioCinco && espacioDos == espacioOcho && espacioDos != "") || (espacioTres == espacioSeis && espacioSeis== espacioNueve && espacioTres != "") || (espacioUno == espacioCinco && espacioUno == espacioNueve && espacioNueve != "") || (espacioTres == espacioCinco && espacioTres == espacioSiete && espacioSiete != "")) ? (<h1>¡Haz Ganado!</h1>) : null
			}
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna1} onClick={(e) => handleChangeUno(e)}>{espacioUno}</div>
					<div className="col-4" style={estiloColumna2} onClick={(e) => handleChangeDos(e)}>{espacioDos}</div>
					<div className="col-4" style={estiloColumna3} onClick={(e) => handleChangeTres(e)}>{espacioTres}</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna4} onClick={(e) => handleChangeCuatro(e)}>{espacioCuatro}</div>
					<div className="col-4" style={estiloColumna5} onClick={(e) => handleChangeCinco(e)}>{espacioCinco}</div>
					<div className="col-4" style={estiloColumna6} onClick={(e) => handleChangeSeis(e)}>{espacioSeis}</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4" style={estiloColumna7} onClick={(e) => handleChangeSiete(e)}>{espacioSiete}</div>
					<div className="col-4" style={estiloColumna8} onClick={(e) => handleChangeOcho(e)}>{espacioOcho}</div>
					<div className="col-4" style={estiloColumna9} onClick={(e) => handleChangeNueve(e)}>{espacioNueve}</div>
				</div>
			</div>
		</div>
	);
};

export default BoardJuego;