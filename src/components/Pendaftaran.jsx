import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaClipboardCheck } from 'react-icons/fa';
import './Pendaftaran.css';

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomorInduk: '',
    jurusan: '',
    alasan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.');
    setFormData({ nama: '', email: '', nomorInduk: '', jurusan: '', alasan: '' });
  };

  return (
    <section className="pendaftaran" id="pendaftaran">
      <Container>
        <div className="section-header">
          <h2>Pendaftaran</h2>
          <p>Bergabunglah dengan GYMUPI sekarang</p>
        </div>

        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="pendaftaran-info">
              <h4 className="mb-4">Mengapa Bergabung dengan GYMUPI?</h4>
              <div className="info-item">
                <FaClipboardCheck className="icon" />
                <div>
                  <h6>Program Latihan Terstruktur</h6>
                  <p>Dapatkan akses ke program latihan yang dirancang oleh instruktur profesional</p>
                </div>
              </div>
              <div className="info-item">
                <FaClipboardCheck className="icon" />
                <div>
                  <h6>Komunitas Supportif</h6>
                  <p>Bergabunglah dengan ribuan mahasiswa yang memiliki passion yang sama</p>
                </div>
              </div>
              <div className="info-item">
                <FaClipboardCheck className="icon" />
                <div>
                  <h6>Event dan Kompetisi</h6>
                  <p>Ikuti berbagai event menarik dan kompetisi fitness sepanjang tahun</p>
                </div>
              </div>
              <div className="info-item">
                <FaClipboardCheck className="icon" />
                <div>
                  <h6>Networking Opportunities</h6>
                  <p>Kembangkan jaringan profesional Anda di bidang fitness dan kesehatan</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="form-card">
              <Card.Body>
                <h5 className="mb-4">Form Pendaftaran</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nomor Induk Mahasiswa</Form.Label>
                    <Form.Control
                      type="text"
                      name="nomorInduk"
                      value={formData.nomorInduk}
                      onChange={handleChange}
                      placeholder="Masukkan NIM Anda"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Jurusan/Program Studi</Form.Label>
                    <Form.Select
                      name="jurusan"
                      value={formData.jurusan}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Jurusan</option>
                      <option value="Teknik Informatika">Teknik Informatika</option>
                      <option value="Teknik Elektro">Teknik Elektro</option>
                      <option value="Pendidikan Jasmani">Pendidikan Jasmani</option>
                      <option value="Ilmu Pendidikan">Ilmu Pendidikan</option>
                      <option value="Lainnya">Lainnya</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Alasan Bergabung</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="alasan"
                      value={formData.alasan}
                      onChange={handleChange}
                      placeholder="Ceritakan alasan Anda bergabung dengan GYMUPI"
                      required
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit" className="w-100 fw-bold">
                    Daftar Sekarang
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
