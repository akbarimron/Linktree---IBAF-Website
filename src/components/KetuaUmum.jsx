import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import './KetuaUmum.css';

export default function KetuaUmum() {
  const ketua = {
    nama: 'Muhammad Rizki',
    jabatan: 'Ketua Umum GYMUPI',
    periode: '2023 - 2024',
    visi: 'Membangun GYMUPI menjadi organisasi yang lebih kuat dan berdampak bagi mahasiswa UPI',
    sambutan: 'Selamat datang di GYMUPI! Kami bangga memiliki komunitas yang solid dan saling mendukung. Bersama-sama, kita akan terus berkembang dan mencapai prestasi yang lebih tinggi. Terima kasih telah menjadi bagian dari keluarga besar GYMUPI.',
    foto: 'placeholder'
  };

  return (
    <section className="ketua-umum" id="ketua-umum">
      <Container>
        <div className="section-header">
          <h2>Ketua Umum</h2>
          <p>Memimpin GYMUPI menuju masa depan yang cerah</p>
        </div>

        <Row className="align-items-center g-4">
          <Col md={5}>
            <div className="ketua-image">
              <div className="image-placeholder">
                <FaUser size={150} />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Card className="ketua-card">
              <Card.Body>
                <h3 className="ketua-nama">{ketua.nama}</h3>
                <p className="ketua-jabatan">{ketua.jabatan}</p>
                <p className="ketua-periode">{ketua.periode}</p>
                
                <div className="divider"></div>
                
                <h5>Visi</h5>
                <p className="ketua-text">{ketua.visi}</p>
                
                <h5>Sambutan</h5>
                <p className="ketua-text">{ketua.sambutan}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
