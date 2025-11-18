import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaDumbbell } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  return (
    <BSNavbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <BSNavbar.Brand href="#home" className="brand-logo">
          <FaDumbbell className="me-2" />
          <strong>GYMUPI</strong>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#informasi-umum">Informasi</Nav.Link>
            <Nav.Link href="#ketua-umum">Ketua Umum</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <Nav.Link href="#dokumentasi">Dokumentasi</Nav.Link>
            <Nav.Link href="#spotify">Spotify</Nav.Link>
            <Nav.Link href="#pendaftaran">Pendaftaran</Nav.Link>
            <Nav.Link href="#nara-hubung">Kontak</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
