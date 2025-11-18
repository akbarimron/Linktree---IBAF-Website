import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaImages } from 'react-icons/fa';
import './Dokumentasi.css';

export default function Dokumentasi() {
  const dokumentasi = [
    { id: 1, judul: 'Event Gathering 2024', bulan: 'November 2024', emoji: '📸' },
    { id: 2, judul: 'Kompetisi Fitness', bulan: 'Oktober 2024', emoji: '🏆' },
    { id: 3, judul: 'Workshop Nutrisi', bulan: 'September 2024', emoji: '📚' },
    { id: 4, judul: 'Latihan Rutin', bulan: 'Agustus 2024', emoji: '💪' },
    { id: 5, judul: 'Community Building', bulan: 'Juli 2024', emoji: '👥' },
    { id: 6, judul: 'Outdoor Activity', bulan: 'Juni 2024', emoji: '🏃' }
  ];

  return (
    <section className="dokumentasi" id="dokumentasi">
      <Container>
        <div className="section-header">
          <h2>Dokumentasi</h2>
          <p>Galeri foto dan video kegiatan GYMUPI</p>
        </div>

        <Row className="g-4">
          {dokumentasi.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <Card className="dokumen-card">
                <div className="dokumen-image">
                  <span className="dokumen-emoji">{item.emoji}</span>
                  <div className="overlay">
                    <FaImages size={40} />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="dokumen-judul">{item.judul}</Card.Title>
                  <Card.Text className="dokumen-bulan">{item.bulan}</Card.Text>
                  <button className="btn btn-sm btn-outline-warning w-100">
                    Lihat Galeri
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <Card className="dokumen-info">
              <Card.Body>
                <h5>Dokumentasi Digital</h5>
                <p>
                  Kami menyimpan semua momen berharga dari setiap kegiatan GYMUPI dalam bentuk foto dan video berkualitas tinggi. 
                  Dokumentasi ini tidak hanya menjadi kenang-kenangan, tetapi juga dapat digunakan sebagai materi promosi dan 
                  pembelajaran untuk tahun-tahun mendatang.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
