import React from 'react';
const User = props => (
	<div>
		<button onClick={props.signIn} className="btn btn-primary">
			<i className="fas fa-user" />
			Sign In
		</button>
		<button onClick={props.signOut} className="btn btn-primary">
			<i className="fas fa-sign-out-alt" />
			Sign Out
		</button>
	</div>
);

export default User;
