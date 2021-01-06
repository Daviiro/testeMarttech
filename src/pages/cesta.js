import React from "react";
import Header from "../components/header";
import Carrinho from "../components/carrinho";
import { Link } from "react-router-dom";
import { ButtonS } from "../components/styles";

export default function Cesta() {
	return (
		<>
			<Header></Header>
			<Carrinho />
			<Link to='/confirma'>
				<ButtonS>Confirma</ButtonS>
			</Link>
		</>
	);
}
