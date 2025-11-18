import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSpotify } from 'react-icons/fa';
import './Spotify.css';

export default function Spotify() {
  const playlists = [
    {
      id: 1,
      nama: 'Workout Energik',
      deskripsi: 'Lagu-lagu dengan ritme tinggi untuk motivasi maksimal saat latihan',
      jumlahLagu: 45
    },
    {
      id: 2,
      nama: 'Pump It Up',
      deskripsi: 'Koleksi musik terbaru untuk kegiatan fitness Anda',
      jumlahLagu: 62
    },
    {
      id: 3,
      nama: 'Chill Recovery',
      deskripsi: 'Musik santai untuk masa pemulihan dan relaksasi',
      jumlahLagu: 38
    }
  ];

  return (
    <section className="spotify-section" id="spotify">
      <Container>
        <div className="section-header">
          <h2>Spotify GYMUPI</h2>
          <p>Dengarkan playlist motivasi kami</p>
        </div>

        <Row className="g-4">
          {playlists.map((playlist) => (
            <Col md={6} lg={4} key={playlist.id}>
              <Card className="spotify-card">
                <div className="spotify-logo">
                  <FaSpotify size={80} />
                </div>
                <Card.Body>
                  <Card.Title className="playlist-nama">{playlist.nama}</Card.Title>
                  <Card.Text className="playlist-deskripsi">{playlist.deskripsi}</Card.Text>
                  <div className="playlist-info">
                    <span className="badge bg-success">{playlist.jumlahLagu} Lagu</span>
                  </div>
                  <button className="btn btn-success btn-sm w-100 mt-3">
                    <FaSpotify className="me-2" />
                    Dengarkan di Spotify
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <Card className="spotify-info">
              <Card.Body>
                <h5>Nikmati Musik Bersama GYMUPI</h5>
                <p>
                  Musik adalah bagian penting dari pengalaman latihan. Kami telah menyiapkan playlist khusus di Spotify 
                  yang dirancang untuk meningkatkan motivasi dan semangat Anda saat berolahraga. Setiap playlist dipilih dengan cermat 
                  untuk memberikan energi yang tepat di setiap tahap latihan Anda.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
