import React, { useState } from "react";
import EntradaJugadores from "./EntradaJugadores.jsx";
import BoardJuego from "./BoardJuego.jsx";



const Home = () =>{

    const [jugada, setJugada] = useState("");

	const [jugadorUno, setJugadorUno] = useState("");
	const [jugadorDos, setJugadorDos] = useState("");

	const handleChange1 = (e) => {
		const { jugadorUno, value } = e.target;
		setJugadorUno({value});
	};

    const handleChange2 = (e) => {
		const { jugadorDos, value } = e.target;
		setJugadorDos({value});
	};

    return (
    <>
        {(jugadorUno !== "" && jugadorDos !== "" && jugada !== "") ? <BoardJuego jugada={jugada} /> :  <EntradaJugadores handleChange1={handleChange1} handleChange2={handleChange2} jugadorUno={jugadorUno} jugadorDos={jugadorDos} />}
    </>
    )
}

export default Home