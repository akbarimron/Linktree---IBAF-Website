import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import './BeritaInformasi.css';

export default function BeritaInformasi() {
  const [berita] = useState([
    {
      id: 1,
      judul: 'Kompetisi Fitness GYMUPI 2024 Berakhir Sukses',
      tanggal: '15 November 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'Kompetisi fitness GYMUPI 2024 telah berhasil dilaksanakan dengan menghadirkan peserta dari berbagai jurusan.',
      thumbnail: '🏆'
    },
    {
      id: 2,
      judul: 'Workshop Nutrisi dan Kesehatan',
      tanggal: '10 November 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'Kami mengadakan workshop gratis tentang pentingnya nutrisi dalam program fitness dan kesehatan.',
      thumbnail: '🥗'
    },
    {
      id: 3,
      judul: 'Peluncuran Program Latihan Baru',
      tanggal: '5 November 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'GYMUPI meluncurkan program latihan baru yang disesuaikan dengan kebutuhan mahasiswa pemula hingga advanced.',
      thumbnail: '💪'
    },
    {
      id: 4,
      judul: 'Community Gathering Bulanan',
      tanggal: '1 November 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'Acara gathering bulanan GYMUPI diadakan untuk mempererat silaturahmi antar member.',
      thumbnail: '👥'
    },
    {
      id: 5,
      judul: 'Tips Fitness di Rumah',
      tanggal: '25 Oktober 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'Panduan lengkap untuk melakukan fitness di rumah tanpa perlu alat gym yang mahal.',
      thumbnail: '🏠'
    },
    {
      id: 6,
      judul: 'Pencapaian Member GYMUPI di Kompetisi Nasional',
      tanggal: '20 Oktober 2024',
      author: 'Admin GYMUPI',
      deskripsi: 'Beberapa member GYMUPI berhasil meraih medali di kompetisi fitness tingkat nasional.',
      thumbnail: '🥇'
    }
  ]);

  return (
    <section className="berita-informasi" id="berita">
      <Container>
        <div className="section-header">
          <h2>Berita & Informasi</h2>
          <p>Update terbaru dari GYMUPI</p>
        </div>

        <Row className="g-4">
          {berita.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <Card className="berita-card h-100">
                <div className="berita-thumbnail">
                  <span className="thumbnail-icon">{item.thumbnail}</span>
                </div>
                <Card.Body>
                  <Card.Title className="berita-judul">{item.judul}</Card.Title>
                  <div className="berita-meta">
                    <span className="meta-item">
                      <FaCalendarAlt className="me-2" />
                      {item.tanggal}
                    </span>
                    <span className="meta-item">
                      <FaUser className="me-2" />
                      {item.author}
                    </span>
                  </div>
                  <Card.Text className="berita-deskripsi">{item.deskripsi}</Card.Text>
                  <a href="#" className="berita-link">Baca Selengkapnya →</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
