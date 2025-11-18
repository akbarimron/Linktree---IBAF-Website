import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">GYMUPI</h6>
            <p className="footer-desc">
              Organisasi mahasiswa yang fokus pada pengembangan kesehatan dan kebugaran di Universitas Pendidikan Indonesia.
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#informasi-umum">Informasi</a></li>
              <li><a href="#berita">Berita</a></li>
              <li><a href="#pendaftaran">Pendaftaran</a></li>
              <li><a href="#nara-hubung">Kontak</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="footer-title">Ikuti Kami</h6>
            <div className="social-links">
              <a href="https://facebook.com/gymupi" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/gymupi" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/gymupi" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/gymupi" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
            </div>
            <div className="footer-contact mt-4">
              <p className="contact-item">
                <FaPhone className="me-2" />
                +62 812-3456-7890
              </p>
              <p className="contact-item">
                <FaEnvelope className="me-2" />
                info@gymupi.com
              </p>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col md={12} className="text-center">
            <p className="copyright">
              &copy; {currentYear} GYMUPI - Gym UPI. Semua hak cipta dilindungi.
            </p>
            <p className="footer-credit">
              Dibuat dengan ❤️ oleh Tim Developer GYMUPI
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
