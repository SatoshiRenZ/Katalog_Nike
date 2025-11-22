"use client";
import React from "react";
import Image from 'next/image';

// Component
import Navbar from "../component/navbar";
import HeroSection from "../component/herosection";
import WorkSection from "../component/worksection";
import ServiceSection from "../component/servicesection";
import ContactSection from "../component/contactsection";
import Footer from "../component/footer";


import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";



export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
              <h2>Tentang Nike</h2>
              <h6>Kualitas Premium, Gaya Terbaik, Kenyamanan Maksimal</h6>
              <p>
                Nike adalah merek terkemuka dalam dunia olahraga dan fashion. Kami berkomitmen untuk memberikan sepatu berkualitas tinggi yang menggabungkan desain modern, teknologi terdepan, dan kenyamanan maksimal. Setiap produk dirancang untuk mendukung gaya hidup aktif Anda, baik untuk lari, basket, atau casual wear. Bergabunglah dengan jutaan penggemar Nike di seluruh dunia yang telah merasakan perbedaan kualitas kami.
              </p>
              <Button variant="dark" href="/produk">Lihat Katalog</Button>
            </Col>
            <Col md={6}>
              <p>
                <Image src="/images/logo-nike.png" alt="Nike Shoes" width={500}
                height={500}></Image>
              </p>
            </Col>
          </Row>
        </Container>
        <section className="bg-dark">
          <WorkSection></WorkSection>
        </section>
        <ServiceSection></ServiceSection>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}