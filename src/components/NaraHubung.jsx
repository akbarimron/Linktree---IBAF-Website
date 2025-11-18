import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './NaraHubung.css';

export default function NaraHubung() {
  const [contacts] = useState([
    {
      id: 1,
      nama: 'Muhammad Rizki',
      posisi: 'Ketua Umum',
      phone: '+62 812-3456-7890',
      email: 'rizki@gymupi.com',
      whatsapp: '6281234567890',
      instagram: '@mrizki_gymupi'
    },
    {
      id: 2,
      nama: 'Sarah Putri',
      posisi: 'Wakil Ketua',
      phone: '+62 821-9876-5432',
      email: 'sarah@gymupi.com',
      whatsapp: '6282198765432',
      instagram: '@sarahputri_gym'
    },
    {
      id: 3,
      nama: 'Budi Santoso',
      posisi: 'Sekretaris',
      phone: '+62 831-2468-1357',
      email: 'budi@gymupi.com',
      whatsapp: '6283124681357',
      instagram: '@budi_santoso_gym'
    }
  ]);

  return (
    <section className="nara-hubung" id="nara-hubung">
      <Container>
        <div className="section-header">
          <h2>Nara Hubung</h2>
          <p>Hubungi kami untuk informasi lebih lanjut</p>
        </div>

        <Row className="g-4 mb-5">
          {contacts.map((contact) => (
            <Col md={6} lg={4} key={contact.id}>
              <Card className="contact-card">
                <div className="contact-header">
                  <div className="avatar">
                    <span className="avatar-text">{contact.nama.charAt(0)}</span>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="contact-nama">{contact.nama}</Card.Title>
                  <p className="contact-posisi">{contact.posisi}</p>
                  
                  <div className="divider"></div>
                  
                  <div className="contact-items">
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </div>
                    <div className="contact-item">
                      <FaWhatsapp className="contact-icon" />
                      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </div>
                    <div className="contact-item">
                      <FaInstagram className="contact-icon" />
                      <a href={`https://instagram.com/${contact.instagram.slice(1)}`} target="_blank" rel="noopener noreferrer">
                        {contact.instagram}
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={12}>
            <Card className="lokasi-card">
              <Card.Body>
                <div className="lokasi-header">
                  <FaMapMarkerAlt className="lokasi-icon" />
                  <h5>Lokasi Kantor GYMUPI</h5>
                </div>
                <p className="lokasi-text">
                  Gedung Olahraga, Universitas Pendidikan Indonesia<br/>
                  Jl. Dr. Setiabudhi No. 229, Bandung, Jawa Barat 40154<br/>
                  Indonesia
                </p>
                <p className="jam-operasional">
                  <strong>Jam Operasional:</strong><br/>
                  Senin - Jumat: 15:00 - 21:00<br/>
                  Sabtu - Minggu: 08:00 - 17:00
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
