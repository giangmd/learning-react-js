import React from 'react';

import {Container, Nav} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Container>
                    <span>LOGO</span>
                    <Nav defaultActiveKey="/" as="ul">
                      <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="/about" href="/about">About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="/contact" href="/contact">Contact</Nav.Link>
                      </Nav.Item>
                    </Nav>
                </Container>
            </header>
        );
    }
}

export default Header;