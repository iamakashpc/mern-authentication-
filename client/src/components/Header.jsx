import { Container, Nav, Navbar } from "react-bootstrap"
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">MERN AUTH</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" />
					<Nav className="ms-auto">
						<Nav.Link href="/login">
							<FaSignInAlt className="signIn" />
							<span className="spanSignIn">Sign In</span>
						</Nav.Link>
						<Nav.Link href="/login">
							<FaSignInAlt className="signIn" />
							<span className="spanSignIn">Sign Up</span>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header