import React, { useState, useContext } from "react";
import { MainS, Block, Row, IputS } from "./styles";
import dados from "../dados";
import Produto from "./item";
import { ItensCarrinho } from "../itensCarrinho";

export default function Items() {
	const [CartItems, setCartItems] = useContext(ItensCarrinho);
	const { produtos } = dados;
	const [search, setSearch] = useState("");

	const handleAdd = (produto) => {
		const exist = CartItems.find((x) => x.id === produto.id);
		if (exist) {
			setCartItems(
				CartItems.map((x) =>
					x.id === produto.id ? { ...exist, qtd: exist.qtd + 1 } : x
				)
			);
		} else {
			setCartItems([...CartItems, { ...produto, qtd: 1 }]);
		}
	};
	return (
		<>
			<MainS>
				<Block>
					<h2>Produtos</h2>
					<IputS
						type='text'
						placeholder='Procure'
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					></IputS>
					<Row>
						{produtos
							.filter((val) => {
								if (search == "") {
									return val;
								} else if (
									val.nome.toLowerCase().includes(search.toLowerCase())
								) {
									return val;
								}
							})
							.map((produto) => (
								<Produto
									key={produto.id}
									produto={produto}
									handleAdd={handleAdd}
								></Produto>
							))}
					</Row>
				</Block>
			</MainS>
		</>
	);
}
