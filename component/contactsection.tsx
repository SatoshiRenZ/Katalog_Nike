"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <Container className='my-5 py-5'>
            <Row className='my-3 py-5'>
                <Col md={12} className='text-center p-4'>
                    <h2>Hubungi Kami</h2>
                    <p>Kami siap membantu Anda menemukan sepatu Nike yang sempurna untuk Anda</p>
                    <Form className='mt-3 p=4 text-start'>
                        <Form.Group className="mb-3" controlId='formName'>
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder='Masukkan Nama Anda' required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder='Masukkan Email Anda' required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formMessage'>
                            <Form.Label>Pesan</Form.Label>
                            <Form.Control type="textarea" placeholder='Tulis pertanyaan atau pesanan Anda' required></Form.Control>
                        </Form.Group>
                        <Button variant='dark' type='submit'>
                            Kirim Pesan
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;