"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ProductCard from "@/component/productcard";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

export default function ProdukPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

    const products: Product[] = [
        {
            id: 1,
            name: "Nike Air Max 270",
            category: "Running",
            price: 2834172,
            image: "/images/nike-shoes-9.jpg",
            description: "Sepatu running dengan teknologi Air Max terbaru untuk kenyamanan maksimal",
        },
        {
            id: 2,
            name: "Nike Air Max 90",
            category: "Running",
            price: 2250666,
            image: "/images/nike-shoes-10.jpg",
            description: "Klasik sepatu running dengan cushioning yang responsif",
        },
        {
            id: 3,
            name: "LeBron XXIII \"Bubble Boy\"",
            category: "Basketball",
            price: 3501036,
            image: "/images/nike-shoes-11.jpg",
            description: "Sepatu basketball profesional dengan ankle support maksimal",
        },
        {
            id: 4,
            name: "Nike Jordan Tatum 4",
            category: "Basketball",
            price: 2167308,
            image: "/images/nike-shoes-7.jpg",
            description: "Sepatu basketball untuk kontrol dan kelincahan",
        },
        {
            id: 5,
            name: "Nike Air Force 1",
            category: "Casual",
            price: 1917234,
            image: "/images/nike-shoes-12.jpg",
            description: "Iconic sepatu casual yang timeless dan versatile",
        },
        {
            id: 6,
            name: "Nike Court Legacy",
            category: "Casual",
            price: 1167012,
            image: "/images/nike-shoes-13.jpg",
            description: "Sepatu casual modern dengan desain minimalis",
        },
        {
            id: 7,
            name: "Nike Blazer Mid \'77 Vintage",
            category: "Casual",
            price: 1750518,
            image: "/images/nike-shoes-14.jpg",
            description: "Sepatu casual dengan desain retro yang iconic",
        },
        {
            id: 8,
            name: "Nike Revolution 8",
            category: "Running",
            price: 1167012,
            image: "/images/nike-shoes-15.jpg",
            description: "Sepatu running entry-level dengan harga terjangkau",
        },
        {
            id: 9,
            name: "Nike P-6000",
            category: "Casual",
            price: 1917234,
            image: "/images/nike-shoes-16.jpg",
            description: "Sepatu casual dengan desain futuristik dan kenyamanan optimal",
        },
        {
            id: 10,
            name: "Nike Dunk Low Retro",
            category: "Casual",
            price: 2000592,
            image: "/images/nike-shoes-17.jpg",
            description: "Sepatu casual dengan gaya klasik dan warna vibrant",
        },
        {
            id: 11,
            name: "Nike Calm RealTree",
            category: "Casual",
            price: 1083654,
            image: "/images/nike-sandal-1.jpg",
            description: "Sandal casual dengan desain nyaman dan stylish",
        },
        {
            id: 12,
            name: "Kobe IX Elite Low EM Protro",
            category: "Basketball",
            price: 3167604,
            image: "/images/nike-shoes-18.jpg",
            description: "Sepatu basketball dengan teknologi Protro untuk performa puncak",
        }
    ];

    const filteredProducts = selectedCategory === "Semua"
        ? products
        : products.filter(product => product.category === selectedCategory);

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
                        <h1 className="display-4 fw-bold mb-3">Katalog Produk Nike</h1>
                        <p className="lead">
                            Jelajahi koleksi sepatu Nike terlengkap dan terbaru di pasaran
                        </p>
                    </div>
                </section>

                <section className="py-3" style={{ backgroundColor: "#1d1c1c" }}>
                    <Container>
                        <Row>
                            <Col md={12} className="d-flex gap-2 justify-content-center flex-wrap">
                                <Button
                                    variant={selectedCategory === "Semua" ? "light" : "outline-light"}
                                    size="sm"
                                    onClick={() => setSelectedCategory("Semua")}
                                >
                                    Semua
                                </Button>
                                <Button
                                    variant={selectedCategory === "Running" ? "light" : "outline-light"}
                                    size="sm"
                                    onClick={() => setSelectedCategory("Running")}
                                >
                                    Running
                                </Button>
                                <Button
                                    variant={selectedCategory === "Basketball" ? "light" : "outline-light"}
                                    size="sm"
                                    onClick={() => setSelectedCategory("Basketball")}
                                >
                                    Basketball
                                </Button>
                                <Button
                                    variant={selectedCategory === "Casual" ? "light" : "outline-light"}
                                    size="sm"
                                    onClick={() => setSelectedCategory("Casual")}
                                >
                                    Casual
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="py-5">
                    <Container>
                        <Row>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                                        <ProductCard product={product} />
                                    </Col>
                                ))
                            ) : (
                                <Col md={12} className="text-center py-5">
                                    <p className="text-muted">Tidak ada produk dalam kategori ini</p>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}
