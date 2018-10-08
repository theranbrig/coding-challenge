import User from './User';
import React from 'react';

const Navbar = props => (
	<nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
		<div className="container">
			<a className="navbar-brand" href="/">
				Bored
			</a>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/messages" className="nav-link">
							Messages
						</a>
					</li>
					<li>
						<User signIn={props.signIn} signOut={props.signOut} />
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
