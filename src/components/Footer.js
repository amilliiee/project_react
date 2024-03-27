import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";


const Footer = () => {
	return (
		<footer className="customFooter text-bg-alert dark bg-info  " bgColor="info" >
			<Container>
				<Row>
					<Col xs={{ size: 4, offset: 1 }} sm="2">
						<h5>Links</h5>
					</Col>

					<Col xs="6" sm="3" className="text-center">
						<h5>Social</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/reservation">Reservation Page</Link>
							</li>
							<li>
								<Link to="/search">Search Page</Link>
							</li>
						</ul>
					</Col>

					<Col sm="4" className="text-center">
						<a
							role="button"
							className="btn btn-link"
							href="tel:+12065551234"
						>
							<i className="fa fa-phone" /> 1-206-555-1234
						</a>
						<br />
						<a
							role="button"
							className="btn btn-link"
							href="mailto:notreal@notreal.co"
						>
							<i className="fa fa-envelope-o" />{" "}
							campsites@nucamp.co
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
