'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSProperties } from 'react';

function WorkSection() {
    const cardImageStyle: CSSProperties = {
        height: '650px',
        objectFit: 'cover',
        objectPosition: 'center',
    };
    return (
        <Container >
            <Row className='mb-3'>
                <Col md={12} className='text-center'>
                    <h2>Koleksi-Koleksi Nike</h2>
                    <p>Temukan sepatu Nike terbaik untuk gaya hidup Anda</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className='mb-3'>
                    <Card>
                        <Card.Img variant='top' src='/images/nike-shoes-1.jpg' style={cardImageStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Nike Running Pro
                            </Card.Title>
                            <Card.Text>
                                Sepatu running dengan teknologi Air Max terbaru. Didesain untuk kenyamanan maksimal dan performa lari yang optimal setiap hari.
                            </Card.Text>
                            <Button variant='dark'>Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-3'>
                    <Card>
                        <Card.Img variant='top' src='/images/nike-shoes-2.jpg' style={cardImageStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Nike Basketball Elite
                            </Card.Title>
                            <Card.Text>
                                Sepatu basketball dengan ankle support yang kuat dan grip maksimal. Cocok untuk pemain profesional dan amatir yang serius.
                            </Card.Text>
                            <Button variant='dark'>Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-3'>
                    <Card>
                        <Card.Img variant='top' src='/images/nike-shoes-3.jpg' style={cardImageStyle}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Nike Casual Lifestyle
                            </Card.Title>
                            <Card.Text>
                                Sepatu casual dengan desain trendy dan nyaman. Sempurna untuk penggunaan sehari-hari, cocok dikombinasikan dengan berbagai gaya outfit.
                            </Card.Text>
                            <Button variant='dark'>Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;