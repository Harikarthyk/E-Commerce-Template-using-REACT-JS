import React, { useContext } from 'react';
import UserContext from '../context.js/UserContext';
import { FaHeart } from 'react-icons/fa';
import './styles.css';

function WishList() {
	const context = useContext(UserContext);
	const handleWishList = (product) => {
		let newWishList = context.wishList.filter(
			(currProduct) => currProduct._id !== product._id,
		);
		context.setWishList(newWishList);
		return;
	};
	return (
		<div className="wishlist">
			{/* {console.log(c)} */}
			<div className="wishList_header">Your Wish List</div>
			<div className="wishlist_container">
				{context.wishList.length === 0 ? (
					<div className="wishlist_empty">
						You have Nothing in your WishList
					</div>
				) : (
					<div>
						{context.wishList.map((product, index) => (
							<div key={index} className="home_body_cart_wrapper">
								<div className="activeList cart_sub_right">
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
											<div className="cart_price_strike">
												₹{product.dummyPrice}
											</div>
										</div>
									</div>
									<div className="cart_btn_wrapper">
										{product.cart ? 'Added to Cart' : 'Add to Cart'}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default WishList;
