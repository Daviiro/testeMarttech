import React, { useState } from "react";
import { InputNome, InputCPF } from "./styles";

export default function PegarDadosUsuario(props) {
	const { nome, setNome } = props;
	const { cpf, setCPF } = props;
	const handleSubmit = () => {
		console.log(nome);
		console.log(cpf);
	};
	return (
		<>
			<InputNome
				type='text'
				placeholder='Nome'
				onChange={(event) => {
					setNome(event.target.value);
				}}
			></InputNome>
			<InputCPF
				type='number'
				placeholder='CPF'
				onChange={(event) => {
					setCPF(event.target.value);
				}}
			></InputCPF>
			<button onClick={handleSubmit}></button>
		</>
	);
}
