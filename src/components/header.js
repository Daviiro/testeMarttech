import React, { useState, useContext } from "react";
import { Block, HeaderS, ButtonBadge, ButtonAdd } from "./styles";
import { Link } from "react-router-dom";
import { ItensCarrinho } from "../itensCarrinho";
export default function Header(props) {
	const [CartItems] = useContext(ItensCarrinho);
	const CountCarItems = CartItems.length;

	return (
		<>
			<Block>
				<HeaderS>
					<a href='#/'>
						<h1>Carrinho de Compras Simples</h1>{" "}
					</a>

					<div>
						<Link to='/cesta'>
							Carrinho
							{""}
							{CountCarItems ? <ButtonBadge>{CountCarItems}</ButtonBadge> : ""}
						</Link>
					</div>
				</HeaderS>
			</Block>
		</>
	);
}
