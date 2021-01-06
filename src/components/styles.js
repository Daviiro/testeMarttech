import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	margin: 0;
	overflow: hidden;
	a {
		padding: 0.5rem;
		text-decoration: none;
		color: gray;
		&:hover {
			color: red;
		}
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const HeaderS = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	div {
		padding: 1rem;
	}
`;

export const AsideS = styled.aside`
	flex: 1;
`;

export const MainS = styled.main`
	flex: 2;
`;

export const Block = styled.div`
	background-color: #e0e0e0;
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 0.5rem;
`;

export const ImgPequena = styled.img`
	max-height: 8rem;
`;

export const ButtonS = styled.button`
	font-size: 0.8rem;
	padding: 0.2rem;
	margin: 0.1rem;
	border-radius: 0.5rem;
	border: 0.1rem #404040 solid;
	background-color: #f0c040;
	width: 100%;
	cursor: pointer;
`;

export const ButtonAdd = styled(ButtonS)`
	background-color: #40c0f0;
	width: 1.5rem;
`;

export const ButtonDel = styled(ButtonS)`
	background-color: #f04040;
	width: 1.5rem;
`;

export const ButtonBadge = styled(ButtonS)`
	background-color: #f04040;
	border: none;
	color: #ffffff;
	width: 1.5rem;
`;

export const IputS = styled.input`
	margin-bottom: 15px;
	border-radius: 5px;
`;
