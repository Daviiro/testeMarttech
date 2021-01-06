import React from "react";
import { ImgPequena, ButtonS } from "./styles";

export default function Produto(props) {
	const { produto, handleAdd } = props;
	console.log(produto);
	return (
		<div>
			<ImgPequena src={produto.image} alt={produto.nome}></ImgPequena>
			<h3>{produto.nome}</h3>
			<div>R${produto.preco}</div>
			<div>
				<ButtonS onClick={() => handleAdd(produto)}>
					Adicionar ao carrinho
				</ButtonS>
			</div>
		</div>
	);
}
