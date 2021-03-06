import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Deposito from '../pages/Deposito/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import DonatorDashboard from '../pages/DonatorDashboard/index';
import SupplierDashboard from '../pages/SupplierDashboard/index';
import UserDashboard from '../pages/UserDashboard/index';
import GenerateBill from '../pages/GenerateBill/index';

// import DashBoard from '../pages/dashboard/index'
// import Repository from '../pages/repository/index'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/deposito"  component={Deposito} />
			<Route path="/"exact component={SignIn} />
			<Route path="/signup" component={SignUp} />
			<Route path="/donator/:id" component={DonatorDashboard} />
			<Route path="/supplier/:id" component={SupplierDashboard} />
			<Route path="/user/:id" component={UserDashboard} />
			<Route path="/bill/:id" component={GenerateBill} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
