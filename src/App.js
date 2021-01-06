import { BrowserRouter as Router, Route } from "react-router-dom";
import Compra from "./pages/compra";
import Confirma from "./pages/confirma";
import { Container } from "./components/styles";
import { ItensProvider } from "./itensCarrinho";
import Cesta from "./pages/cesta";

function App() {
	return (
		<Container>
			<Router>
				<ItensProvider>
					<Route exact={true} path='/' component={Compra}>
						<Compra />
					</Route>
					<Route exact path='/confirma' component={Confirma}></Route>
					<Route exact path='/cesta' component={Cesta}></Route>
				</ItensProvider>
			</Router>
		</Container>
	);
}

export default App;
