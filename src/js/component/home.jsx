import React from "react";

const estiloRow = {
	display: "grid",
    justifyContent: "center",
	marginTop: "10px",
	color: "white",
	
}

const estiloContainer2 = {
	textAlignt : "center",
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
}


//create your first component
const Home = () => {
	return (
		<div className="row" style={estiloRow}>	
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto">Tic Tac Toe in React.js</h1>
					<h2 className="titulo2" style={estiloH1}>Pick a weapon!</h2>
			</div>
			<div>
				<h2 style={estiloH2}>Choose your weapon</h2>
				<input type="text" placeholder="Usarname Player 1"></input>
				<input type="text" placeholder="Usarname Player 2"></input>
				
			</div>
			<div className="container">
				<button className="elegir1">X</button>
				<button className="elegir2">O</button>
			</div>		
		</div>
	);
};

export default Home;
