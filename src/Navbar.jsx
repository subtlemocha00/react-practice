export default function Navbar(props) {
	const links = [...props.linkList];
	return (
		<div className="nav d-flex justify-content-center">
			{links.map((link) => {
				return (
					<div key={link.id} className="btn btn-dark text-warning">
						{link.name}
					</div>
				);
			})}
		</div>
	);
}
