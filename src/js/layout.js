import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./component/login";
import { Register } from "./component/register";
import { Purchases } from "./views/purchases";
import { PurchasesList } from "./views/purchasesList";
import { Sales } from "./views/sales";
import { SalesList } from "./views/salesList";
import { Inventory } from "./views/inventory";
import { Delivery } from "./views/delivery";
import { Dashboard } from "./views/dashboard";
import { Single } from "./views/single";
import { Saleslist } from "./views/salesList";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/register" component={Register} />
							<Route path="/private/dashboard" component={Dashboard} />
							<Route
								path="/private"
								render={() => (
									<React.Fragment>
										<Navbar />
										<Switch>
											<Route path="/private/purchases" component={Purchases} />
											<Route path="/private/purchasesList" component={PurchasesList} />
											<Route path="/private/sales" component={Sales} />
											<Route path="/private/salesList" component={SalesList} />
											<Route path="/private/inventory" component={Inventory} />
											<Route path="/private/delivery" component={Delivery} />
											<Route path="/private/neworder" component={Saleslist} />
											<Route path="/private/single/:theid" component={Single} />
										</Switch>
										<Footer />
									</React.Fragment>
								)}
							/>
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
