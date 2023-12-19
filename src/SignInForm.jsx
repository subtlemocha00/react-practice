export default function SignInForm() {
	return (
		<form className="bg-warning p-3 border border-dark my-3">
			<div className="form-group mb-2">
				<label htmlFor="email" className="sr-only">
					Email
				</label>
				<input
					id="email"
					type="text"
					placeholder="Email Address"
					aria-describedby="emailHelpBlock"
				></input>
				<small id="emailHelpBlock" className="form-text muted m-2">
					Please enter a valid email address.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="password" className=" sr-only">
					Password
				</label>
				<input
					id="password"
					type="password"
					placeholder="Password"
					aria-describedby="passwordHelpBlock"
				></input>
				<small id="passwordHelpBlock" className="form-text muted m-2">
					Password must be 8-20 characters long. It may contain letters, numbers
					and special characters and must not contain spaces or emoji.
				</small>
			</div>
		</form>
	);
}
