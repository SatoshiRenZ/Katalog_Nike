'use client'
import { use } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';

function navbar() {
    return (
        <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image
                        src="/images/logo-nike.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                        unoptimized
                        style={{ objectFit: 'contain' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/produk">Produk</Nav.Link>
                        <NavDropdown title="Kategori" id="navbarScrollingDropDown">
                            <NavDropdown.Item href="#running">Running</NavDropdown.Item>
                            <NavDropdown.Item href="#basketball">Basketball</NavDropdown.Item>
                            <NavDropdown.Item href="#casual">Casual</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#sale">Sale</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">Tentang</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Cari sepatu..."
                            className="me-2"
                            aria-label="Search"
                        ></Form.Control>
                        <Button variant="outline-light">Cari</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;

