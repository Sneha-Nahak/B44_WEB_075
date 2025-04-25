import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '2rem 0' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Tenant-Landlord</h5>
            <p>Your all-in-one platform for managing rentals with ease and transparency.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Quick Links</h6>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Sign Up</Link></li>
              <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
              <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Contact</h6>
            <p>Email: support@tenantlandlord.com</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </Col>
        </Row>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Tenant-Landlord Platform. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
