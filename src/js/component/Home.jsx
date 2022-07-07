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

    const handleChange3 = (e) => {
		const { jugada, value } = e.target;
		setJugada({value});
	};

    return (
    <>
        {(jugadorUno !== "" && jugadorDos !== "" && jugada !== "") ? <BoardJuego handleChange3={handleChange3}/> :  <EntradaJugadores handleChange1={handleChange1} handleChange2={handleChange2} handleChange3={handleChange3} jugadorUno={jugadorUno} jugadorDos={jugadorDos} setJugada={setJugada} />}
    </>
    )
}

export default Home