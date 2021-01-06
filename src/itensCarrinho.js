import React, { useState, createContext } from "react";

export const ItensCarrinho = createContext();

export const ItensProvider = (props) => {
	//const [cartItems, setCartItems] = useState([]);
	const [CartItems, setCartItems] = useState([]);
	return (
		<ItensCarrinho.Provider value={[CartItems, setCartItems]}>
			{props.children}
		</ItensCarrinho.Provider>
	);
};
