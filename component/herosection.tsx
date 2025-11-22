"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Sepatu Nike Terbaik",
            subtitle: "Rasakan kenyamanan dan gaya dalam setiap langkah dengan koleksi Nike premium kami.",
            imageUrl: "/images/nike-shoes-5.jpg",
        },
        {
            title: "Teknologi Terdepan",
            subtitle: "Inovasi Nike membawa Anda lebih jauh, lebih cepat, lebih kuat dari sebelumnya.",
            imageUrl: "/images/nike-shoes-6.jpg",
        },
        {
            title: "Gaya yang Berbicara",
            subtitle: "Dari running hingga casual, temukan pasangan sempurna untuk setiap momen Anda.",
            imageUrl: "/images/nike-shoes-4.jpg",
        },
    ]

    return (
        <Carousel interval={3000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div 
                        style={{
                            backgroundImage:`url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "60vh",
                        }}>
                    </div>
                    <Carousel.Caption style={{
                        padding: "40px 20px",
                        borderRadius: "10px",
                        bottom: "60px",
                    }}>
                        <h1 className="display-4 fw-bold" style={{
                            color: "#ffffff",
                            textShadow: "4px 4px 8px rgba(0, 0, 0, 5)",
                            fontWeight: "900",
                            marginBottom: "15px",
                        }}>
                            {slide.title}
                        </h1>
                        <p className="lead" style={{
                            color: "#f5f5f5",
                            textShadow: "2px 2px 6px rgba(0, 0, 0, 5)",
                            fontSize: "18px",
                            fontWeight: "700",
                        }}>
                            {slide.subtitle}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;