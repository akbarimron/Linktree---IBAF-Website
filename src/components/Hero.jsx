import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDumbbell, FaUsers, FaTrophy } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title">Selamat Datang di GYMUPI</h1>
            <p className="hero-subtitle">
              Gym UPI adalah organisasi mahasiswa yang fokus pada pengembangan kesehatan dan kebugaran di Universitas Pendidikan Indonesia
            </p>
            <div className="hero-features mt-4">
              <div className="feature-item">
                <FaDumbbell className="feature-icon" />
                <span>Latihan Profesional</span>
              </div>
              <div className="feature-item">
                <FaUsers className="feature-icon" />
                <span>Komunitas Solid</span>
              </div>
              <div className="feature-item">
                <FaTrophy className="feature-icon" />
                <span>Prestasi Gemilang</span>
              </div>
            </div>
            <button className="btn btn-warning btn-lg mt-4">
              Bergabung Sekarang
            </button>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="hero-placeholder">
              <FaDumbbell size={200} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
