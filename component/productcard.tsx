"use client";
import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import { CSSProperties } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const cardImageStyle: CSSProperties = {
        height: "250px",
        objectFit: "cover",
        objectPosition: "center",
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Card className="h-100 shadow-sm" style={{ border: "none", transition: "transform 0.3s" }}>
            <div style={{ overflow: "hidden", height: "250px" }}>
                <Card.Img
                    variant="top"
                    src={product.image}
                    style={cardImageStyle}
                    alt={product.name}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <small className="text-muted mb-2">{product.category}</small>
                <Card.Title className="mb-2">{product.name}</Card.Title>
                <Card.Text className="text-muted small mb-3">
                    {product.description}
                </Card.Text>
                <h5 className="text-dark fw-bold mb-3">{formatPrice(product.price)}</h5>
                <Button variant="dark" className="mt-auto">
                    Lihat Detail
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
