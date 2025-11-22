'use client';
import { Container, Row, Col, Image } from "react-bootstrap";

function ServiceSection() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <i className="bi bi-hand-thumbs-up" style={{ fontSize: '48px', color: '#ffffff', marginBottom: '15px' }}></i>
                    <h3>Kenyamanan Premium</h3>
                    <p>Teknologi cushioning terbaik Nike memberikan kenyamanan maksimal untuk setiap aktivitas, dari lari pagi hingga seharian bekerja.</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <i className="bi bi-palette" style={{ fontSize: '48px', color: '#ffffff', marginBottom: '15px' }}></i>
                    <h3>Desain Modern</h3>
                    <p>Setiap sepatu Nike dirancang dengan perhatian terhadap detail, menggabungkan estetika kontemporer dengan fungsionalitas tinggi.</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <i className="bi bi-shield-check" style={{ fontSize: '48px', color: '#ffffff', marginBottom: '15px' }}></i>
                    <h3>Daya Tahan Luar Biasa</h3>
                    <p>Material berkualitas tinggi dan konstruksi presisi memastikan sepatu Nike tahan lama dan siap menghadapi setiap tantangan.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;