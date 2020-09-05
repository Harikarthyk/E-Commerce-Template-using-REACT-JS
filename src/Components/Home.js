import React, { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import UserContext from '../context.js/UserContext';

function Home() {
	const [products, setProducts] = useState([]);
	const context = useContext(UserContext);
	const checkCartItem = (product) => {
		let temp = context.cartItem.filter((curr) => product === curr._id);
		return temp.length !== 0;
	};
	useEffect(() => {
		let allProducts = [
			{
				_id: '5f41da7777aaae875c8b5f76',
				sold: '0',
				name: 'White Mug 01',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f76'),
			},
			{
				_id: '5f41da7777aaae875c8b5f77',
				sold: '0',
				name: 'White Mug 02',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f77'),
			},
			{
				_id: '5f41da7777aaae875c8b5f78',
				sold: '0',
				name: 'White Mug 03',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				cart: checkCartItem('5f41da7777aaae875c8b5f78'),
				stock: 25,
			},
			{
				_id: '5f41da7777aaae875c8b5f79',
				sold: '0',
				name: 'White Mug 04',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f79'),
			},
			{
				_id: '5f41da7777aaae875c8b5f71',
				sold: '0',
				name: 'White Mug 05',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f71'),
			},
			{
				_id: '5f41da7777aaae875c8b5f72',
				sold: '0',
				name: 'White Mug 06',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f72'),
			},
			{
				_id: '5f41da7777aaae875c8b5f73',
				sold: '0',
				name: 'White Mug 07',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f73'),
			},
			{
				_id: '5f41da7777aaae875c8b5f74',
				sold: '0',
				name: 'White Mug 08',
				description: 'Super Cool mug with less weight',
				dummyPrice: 450,
				price: 250,
				stock: 25,
				cart: checkCartItem('5f41da7777aaae875c8b5f74'),
			},
		];
		setProducts(allProducts);
	}, []);
	const handleAddCartItem = (product) => {
		let oldCartItem = context.cartItem;
		let checkPresence = oldCartItem.filter(
			(currProducts) => currProducts._id === product._id,
		);
		if (checkPresence.length) {
			let newCartItem = oldCartItem.filter(
				(currProduct) => product._id !== currProduct._id,
			);
			let newProduct = products.map((currProduct) => {
				if (currProduct._id === product._id) currProduct.cart = false;
				return currProduct;
			});
			context.setCartItem(newCartItem);
			setProducts(newProduct);
			console.log('new Cart', newCartItem);
			return;
		}
		product.cart = true;
		oldCartItem.push(product);
		let newProduct = products.map((currProduct) => {
			if (currProduct._id === product._id) currProduct.cart = true;
			return currProduct;
		});
		context.setCartItem(oldCartItem);
		setProducts(newProduct);
		return;
	};

	const handleWishList = (product) => {
		let oldWishList = context.wishList;
		let checkPresence = oldWishList.filter(
			(currProducts) => currProducts._id === product._id,
		);
		if (checkPresence.length !== 0) {
			return;
		}
		oldWishList.push(product);
		context.setWishList(oldWishList);
		// console.log(context.wishList);
		return;
	};
	return (
		<div className="home">
			<div className="home_caption">
				<h1>
					Find things you'll love. Support independent sellers. Only on Mug Hub.
				</h1>
			</div>
			<div className="home_filter">
				<div className="home_total_result">
					<h4>
						SHOWING
						<strong>
							{' '}
							{products.length} <i>Results</i>
						</strong>
					</h4>
				</div>
				<div className="home_sortby">
					{/* <select onChange={(e) => setCate(e.target.value)}>
						<option value="-1">All</option>
						{categories.map((cate, index) => {
							return (
								<option key={index} value={cate._id}>
									{cate.name}
								</option>
							);
						})}
					</select> */}
					<select>
						<option>All</option>
						<option>Black Color</option>
						<option>White Color</option>
						<option>Couple</option>
					</select>
				</div>
			</div>

			<div className="home_body">
				{products.map((product, index) => (
					<div key={index} className="home_body_cart_wrapper">
						<div className="cart_sub_right">
							{/* <FaHeart onClick={() => updatetoWishList(product)} /> */}
							<FaHeart onClick={() => handleWishList(product)} />
						</div>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/71iS65d3pWL._SX425_.jpg"
							alt="temp_age"
						/>
						<div className="cart_body">
							<div className="cart_title">{product.name}</div>
							<div className="cart_des">{product.description}</div>
							<div className="cart_sub_body">
								<div className="cart_sub_left">
									<div className="cart_price">₹{product.price}</div>
									<div className="cart_price_strike">₹{product.dummyPrice}</div>
								</div>
							</div>
							<div
								className={
									product.cart
										? 'cart_btn_wrapper active_cart'
										: 'cart_btn_wrapper'
								}
								onClick={() => handleAddCartItem(product)}
							>
								{product.cart ? 'Remove from Cart' : 'Add to Cart'}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="home_next_btn">
				<button className="home_next">next</button>
			</div>
		</div>
	);
}

export default Home;
