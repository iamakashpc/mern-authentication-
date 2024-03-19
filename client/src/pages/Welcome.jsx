import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Welcome.css";
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Welcome = () => {
  return (
		<div className="welcome-container">
			<Container>
				<Row className="welcome-row">
					<Col>
						<h1 className="welcome-title">Welcome to our Website!</h1>
						<p className="welcome-text">
							You have successfully Logged in. Start exploring our
							amazing features!
						</p>
						<Button className="welcome-button" variant="primary">
							Get Started <FaArrowAltCircleRight />
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Welcome