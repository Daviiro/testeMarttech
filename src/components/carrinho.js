import React, { useContext } from "react";
import { ItensCarrinho } from "../itensCarrinho";
import { AsideS, Block, Row, ButtonAdd, ButtonDel, ButtonS } from "./styles";

export default function Carrinho() {
	const [CartItems, setCartItems] = useContext(ItensCarrinho);
	const itemsPrice = CartItems.reduce((a, c) => a + c.preco * c.qtd, 0);
	const shippingPrice = itemsPrice > 2000 ? 0 : 50;
	const totalPrice = itemsPrice + shippingPrice;
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
			<AsideS>
				<Block>
					<h2>Itens no carrinho</h2>
					<div>{CartItems.length === 0 && <div>Carrinho Vazio </div>}</div>
					{CartItems.map((item) => (
						<Row key={item.id}>
							<div>{item.nome}</div>
							<div>
								<ButtonAdd onClick={() => handleAdd(item)}>+</ButtonAdd>
							</div>
							<div>
								{item.qtd} X R${item.preco.toFixed(2)}
							</div>
						</Row>
					))}
					{CartItems.length !== 0 && (
						<>
							<hr></hr>
							<Row>
								<div>Preço</div>
								<div>R${itemsPrice.toFixed(2)}</div>
							</Row>

							<Row>
								<div>Preço Frete</div>
								<div>R${shippingPrice.toFixed(2)}</div>
							</Row>
							<Row>
								<div>
									<strong>Total</strong>
								</div>
								<div>R${totalPrice.toFixed(2)}</div>
							</Row>
							<hr />
						</>
					)}
				</Block>
			</AsideS>
		</>
	);
}
