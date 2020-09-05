import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context.js/UserContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

function Cart() {
	const [cartProduct, setCartProduct] = useState([]);
	const [total, setTotal] = useState(0);
	const context = useContext(UserContext);
	useEffect(() => {
		let cartProuctItem = context.cartItem.map((product) => {
			return { product: product, count: 1 };
		});
		setCartProduct(cartProuctItem);
		let sum = context.cartItem.reduce(function (acc, val) {
			return acc + val.price;
		}, 0);
		setTotal(sum);
	}, []);
	const handleCount = (product, operator) => {
		let cartProductItem = [];
		cartProductItem = cartProduct.map((currProduct) => {
			if (product._id === currProduct.product._id) {
				currProduct.count += operator > 0 ? 1 : -1;
				if (currProduct.count <= 1) currProduct.count = 1;
			}
			return currProduct;
		});

		setCartProduct(cartProductItem);
		let sum = cartProductItem.reduce(function (acc, val) {
			return acc + val.count * val.product.price;
		}, 0);
		setTotal(sum);
	};
	const removeCartItem = (product) => {
		let newCartItem = cartProduct.filter(
			(curr) => curr.product._id !== product._id,
		);
		let sum = newCartItem.reduce(function (acc, val) {
			return acc + val.count * val.product.price;
		}, 0);
		setTotal(sum);
		setCartProduct(newCartItem);
		newCartItem = newCartItem.map((curr) => curr.product);
		context.setCartItem(newCartItem);
	};
	return (
		<div className="cart">
			<div className="cartItem__wrapper">
				<div className="cart_header">
					<div className="cart_text">My Cart ({cartProduct.length})</div>
				</div>

				{cartProduct.map((item) => (
					<div className="cartItem__body" key={item.product._id}>
						<div className="cartItem_img_wrapper">
							<div className="cartItem__img">
								<img
									src="https://images-na.ssl-images-amazon.com/images/I/71iS65d3pWL._SX425_.jpg"
									alt="temp_age"
								/>
							</div>
							<div className="cartItem__noItems">
								<FaPlusCircle onClick={() => handleCount(item.product, 1)} />
								<div className="cartItem__noItem__text">{item.count}</div>
								<FaMinusCircle onClick={() => handleCount(item.product, -1)} />
							</div>
						</div>

						<div className="cartItem__details">
							<div className="cartItem__name">{item.product.name}</div>
							<div className="cartItem__price">
								₹{item.product.price * item.count}
							</div>

							<div className="cartItem__remove">
								<button
									className="cartItem__remove__button"
									onClick={() => {
										removeCartItem(item.product);
									}}
								>
									Remove from Cart
								</button>
							</div>
						</div>
					</div>
				))}
				<div className="cartPlaceOrder_wrapper">
					<div className="cartPlaceOrder_btn">Place Order</div>
				</div>
			</div>
			<div className="cart_buynow_container">
				<div className="cart_buynow_title">Price Details</div>
				<div className="cart_buynow">
					{cartProduct.map((item) => {
						return (
							<div key={item.product._id} className="cart_buynow_body ">
								<div className="buyname_product_name">{item.product.name}</div>
								<div className="buyname_product_count">
									({item.count} <i>items</i>)
								</div>
								<div className="buyname_product_price">
									₹{item.count * item.product.price}
								</div>
							</div>
						);
					})}
					<div className="buyknow_total">
						<h3>Total Amount : </h3> ₹ {total}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
