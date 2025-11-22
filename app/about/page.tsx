"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <main>
                <section
                    style={{
                        backgroundImage: "linear-gradient(rgba(29, 28, 28, 0.6), rgba(29, 28, 28, 0.6)), url(/images/nike-shoes-4.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                        marginBottom: 0,
                    }}
                >
                    <div>
                        <h1 className="display-4 fw-bold mb-3">Tentang Nike</h1>
                        <p className="lead">
                            Mengenal lebih dekat dengan merek Nike yang telah menginspirasi jutaan orang
                        </p>
                    </div>
                </section>

                <section className="py-5" style={{ backgroundColor: "#1d1c1c", color: "white" }}>
                    <Container>
                        <Row className="align-items-center mb-5">
                            <Col md={6} className="mb-4 mb-md-0">
                                <h2 className="fw-bold mb-4" style={{ color: "white" }}>Sejarah Nike</h2>
                                <p className="mb-3" style={{ color: "#e0e0e0" }}>
                                    Nike, Inc. didirikan pada tahun 1964 sebagai Blue Ribbon Sports oleh Bill Bowerman dan Phil Knight.
                                    Perusahaan ini dimulai dengan menjual sepatu atletik berkualitas tinggi dan telah berkembang menjadi
                                    salah satu merek olahraga paling terkenal di dunia.
                                </p>
                                <p className="mb-3" style={{ color: "#e0e0e0" }}>
                                    Dengan slogan ikonik "Just Do It", Nike telah menginspirasi jutaan atlet dan penggemar olahraga
                                    untuk mencapai potensi penuh mereka. Inovasi dan dedikasi terhadap kualitas tetap menjadi inti
                                    dari semua yang kami lakukan.
                                </p>
                                <p style={{ color: "#e0e0e0" }}>
                                    Hari ini, Nike mengoperasikan di lebih dari 170 negara dan mempekerjakan lebih dari 70.000 orang
                                    di seluruh dunia, terus berinovasi dan menciptakan produk-produk yang mendukung gaya hidup aktif.
                                </p>
                            </Col>
                            <Col md={6}>
                                <Image
                                    src="/images/logo-nike.png"
                                    alt="Nike Logo"
                                    width={400}
                                    height={400}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Col>
                        </Row>

                        <Row className="my-5">
                            <Col md={12} className="mb-4">
                                <h2 className="fw-bold text-center mb-5" style={{ color: "white" }}>Nilai-Nilai Nike</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="mb-4 text-center">
                                <div className="p-4 rounded" style={{ backgroundColor: "#2a2a2a" }}>
                                    <i
                                        className="bi bi-lightning-fill"
                                        style={{ fontSize: "48px", color: "#ffffff", marginBottom: "15px", display: "block" }}
                                    ></i>
                                    <h4 className="fw-bold mb-3" style={{ color: "white" }}>Inovasi</h4>
                                    <p style={{ color: "#e0e0e0" }}>
                                        Kami terus berinovasi untuk menghadirkan teknologi terbaik dalam setiap produk Nike yang kami ciptakan.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4 text-center">
                                <div className="p-4 rounded" style={{ backgroundColor: "#2a2a2a" }}>
                                    <i
                                        className="bi bi-heart-fill"
                                        style={{ fontSize: "48px", color: "#ffffff", marginBottom: "15px", display: "block" }}
                                    ></i>
                                    <h4 className="fw-bold mb-3" style={{ color: "white" }}>Komitmen</h4>
                                    <p style={{ color: "#e0e0e0" }}>
                                        Kami berkomitmen untuk memberikan kualitas terbaik dan kepuasan kepada setiap pelanggan kami.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4 text-center">
                                <div className="p-4 rounded" style={{ backgroundColor: "#2a2a2a" }}>
                                    <i
                                        className="bi bi-star-fill"
                                        style={{ fontSize: "48px", color: "#ffffff", marginBottom: "15px", display: "block" }}
                                    ></i>
                                    <h4 className="fw-bold mb-3" style={{ color: "white" }}>Excellence</h4>
                                    <p style={{ color: "#e0e0e0" }}>
                                        Keunggulan dalam desain, performa, dan kualitas adalah standar kami dalam setiap produk.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        {/* Categories Section */}
                        <Row className="my-5">
                            <Col md={12} className="mb-4">
                                <h2 className="fw-bold text-center mb-5" style={{ color: "white" }}>Kategori Produk Nike</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} className="mb-4">
                                <div className="card" style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", backgroundColor: "#2a2a2a" }}>
                                    <div style={{ height: "200px", backgroundColor: "#3a3a3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <i className="bi bi-lightning" style={{ fontSize: "48px", color: "#ffffff" }}></i>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="fw-bold mb-2" style={{ color: "white" }}>Sepatu Running</h5>
                                        <p style={{ color: "#e0e0e0", fontSize: "0.875rem", marginBottom: 0 }}>
                                            Dirancang untuk performa lari maksimal dengan teknologi cushioning terdepan.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div className="card" style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", backgroundColor: "#2a2a2a" }}>
                                    <div style={{ height: "200px", backgroundColor: "#3a3a3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <i className="bi bi-dribbble" style={{ fontSize: "48px", color: "#ffffff" }}></i>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="fw-bold mb-2" style={{ color: "white" }}>Sepatu Basketball</h5>
                                        <p style={{ color: "#e0e0e0", fontSize: "0.875rem", marginBottom: 0 }}>
                                            Memberikan ankle support dan stabilitas untuk performa basket yang optimal.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div className="card" style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", backgroundColor: "#2a2a2a" }}>
                                    <div style={{ height: "200px", backgroundColor: "#3a3a3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <i className="bi bi-bag" style={{ fontSize: "48px", color: "#ffffff" }}></i>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="fw-bold mb-2" style={{ color: "white" }}>Sepatu Casual</h5>
                                        <p style={{ color: "#e0e0e0", fontSize: "0.875rem", marginBottom: 0 }}>
                                            Menggabungkan gaya dan kenyamanan untuk penggunaan sehari-hari.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* CTA Section */}
                <section style={{ backgroundColor: "#1d1c1c", color: "white" }} className="py-5">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center">
                                <h2 className="fw-bold mb-4" style={{ color: "white" }}>Jelajahi Katalog Nike Lengkap</h2>
                                <p className="mb-4 lead" style={{ color: "#e0e0e0" }}>
                                    Temukan semua koleksi sepatu Nike di halaman katalog produk kami
                                </p>
                                <a href="/produk" className="btn btn-light btn-lg">
                                    Lihat Katalog Produk
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
