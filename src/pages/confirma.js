import React from "react";
import dados from "../dados";
import Header from "../components/header";
import Carrinho from "../components/carrinho";
import PegarDadosUsuario from "../components/pegarDadosUsuario";

export default function confirma(props) {
	console.log(dados);
	return (
		<>
			<Header></Header>
			<Carrinho />
			<PegarDadosUsuario />
		</>
	);
}
