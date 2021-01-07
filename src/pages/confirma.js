import React, { useState } from "react";
import dados from "../dados";
import Header from "../components/header";
import Carrinho from "../components/carrinho";
import PegarDadosUsuario from "../components/pegarDadosUsuario";

export default function Confirma() {
	console.log(dados);
	const [nome, setNome] = useState("");
	const [cpf, setCPF] = useState();
	return (
		<>
			<Header></Header>
			<Carrinho />
			<PegarDadosUsuario
				nome={nome}
				setNome={setNome}
				cpf={cpf}
				setCPF={setCPF}
			/>
		</>
	);
}
