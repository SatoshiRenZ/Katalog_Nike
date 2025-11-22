"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

export default function Footer() {
    return (
        <footer id='footer' className='pt-md-5 pd-md-2 py-3 bg-dark text-light'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h3>Kategori Sepatu</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href='/produk' className='text-light'>Sepatu Running</a></li>
                            <li className='mb-2'><a href='/produk' className='text-light'>Sepatu Basketball</a></li>
                            <li className='mb-2'><a href='/produk' className='text-light'>Sepatu Casual</a></li>
                            <li className='mb-2'><a href='/produk' className='text-light'>Semua Koleksi</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3>Jelajahi</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href='/' className='text-light'>Beranda</a></li>
                            <li className='mb-2'><a href='/#about' className='text-light'>Tentang Nike</a></li>
                            <li className='mb-2'><a href='/produk' className='text-light'>Katalog Produk</a></li>
                            <li className='mb-2'><a href='/#contact' className='text-light'>Hubungi Kami</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3>Informasi</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href='#' className='text-light'>Kebijakan Privasi</a></li>
                            <li className='mb-2'><a href='#' className='text-light'>Syarat & Ketentuan</a></li>
                            <li className='mb-2'><a href='#' className='text-light'>FAQ</a></li>
                            <li className='mb-2'><a href='#' className='text-light'>Blog</a></li>
                        </ul>
                    </Col>
                    <Row classname="mt-3">
                        <Col md={12} className="text-center">
                            <hr></hr>

                        </Col>
                    </Row>
                </Row>
            </Container>
        </footer>

    )
}