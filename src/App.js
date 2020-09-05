import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './context.js/UserContext';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import About from './Components/About';

function App() {
	const [cartItem, setCartItem] = useState([]);
	const [wishList, setWishList] = useState([]);
	return (
		<div className="App">
			<BrowserRouter>
				<UserContext.Provider
					value={{
						cartItem,
						setCartItem,
						wishList,
						setWishList,
					}}
				>
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route path="/wishList" component={WishList} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/about" component={About} />
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
