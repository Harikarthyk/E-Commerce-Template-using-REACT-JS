import React, { useState } from 'react';
import './styles.css';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [active, setActive] = useState('Home');
	return (
		<div className={showDropDown ? 'responsive topnav' : ' topnav'}>
			<div className="logo">
				<img
					src="https://dcassetcdn.com/design_img/1936056/118878/118878_11637023_1936056_942f2d0f_image.jpg"
					alt="Logo"
				/>
			</div>
			<div
				onClick={() => setActive('Home')}
				className={active === 'Home' ? 'navbar_head active' : 'navbar_head'}
			>
				<Link to="/home" className="nav_link">
					Home
				</Link>
			</div>
			<div
				onClick={() => setActive('List')}
				className={active === 'List' ? 'navbar_head active' : 'navbar_head'}
			>
				<Link to="/wishList" className="nav_link">
					WishList
				</Link>
			</div>
			<div
				onClick={() => setActive('About')}
				className={active === 'About' ? 'navbar_head active' : 'navbar_head'}
			>
				<Link to="/about" className="nav_link">
					About
				</Link>
			</div>
			<div
				onClick={() => setActive('Cart')}
				className={active === 'Cart' ? 'navbar_head active' : 'navbar_head'}
			>
				<Link to="/cart">
					<FaShoppingCart />
				</Link>
			</div>
			<div className="icon" onClick={() => setShowDropDown(!showDropDown)}>
				<i className="fa fa-bars">
					<FaBars />
				</i>
			</div>
		</div>
	);
};

export default Navbar;
