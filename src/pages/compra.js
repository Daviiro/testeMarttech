import React from "react";
import dados from "../dados";
import Header from "../components/header";
import Items from "../components/items";
import { Row, ButtonS, Block } from "../components/styles";
import Carrinho from "../components/carrinho";
import { Link } from "react-router-dom";

export default function compra(props) {
	console.log(dados);
	return (
		<>
			<Header />
			<Row>
				<Items />
				<div>
					<Carrinho></Carrinho>
					<Link to='/confirma'>
						<ButtonS>Confirma</ButtonS>
					</Link>
				</div>
			</Row>
		</>
	);
}
