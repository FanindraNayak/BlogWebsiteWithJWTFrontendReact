import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link to="/" style={{ color: "white" }}>
							Home
						</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>
							{" "}
							<Link to="/user/posts" style={{ color: "white" }}>
								User Posts
							</Link>{" "}
						</Nav.Link>
						<Nav.Link>
							<Link to="/user/create/post" style={{ color: "white" }}>
								Create Posts
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/about/me" style={{ color: "white" }}>
								User Info
							</Link>{" "}
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
