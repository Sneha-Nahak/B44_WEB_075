import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '6vh 0', marginTop:'2.4rem'}}>
      <Container style={{ maxWidth: '90vw' }}>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#2c3e50', fontSize: '2rem' }}>
          Contact Us
        </h2>
        <Card
          className="p-4 p-md-5 border-0 shadow-lg rounded-4"
          style={{
            background: 'linear-gradient(to right, #ffffff, #f1f4f9)',
            borderRadius: '1.5rem',
          }}
        >
          <Row>
            {/* Contact Form */}
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="mb-4 fw-semibold" style={{ color: '#2c3e50', fontSize: '1.3rem' }}>
                Send a Message
              </h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-3 shadow-sm"
                    required
                    style={{ fontSize: '1rem' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-3 shadow-sm"
                    required
                    style={{ fontSize: '1rem' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your message..."
                    className="rounded-3 shadow-sm"
                    required
                    style={{ fontSize: '1rem' }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="px-4 py-2 rounded-3"
                  style={{ fontSize: '1rem' , backgroundColor:'#21262b'}}
                >
                  Send Message
                </Button>
              </Form>
            </Col>

            {/* Contact Info */}
            <Col md={6} className="ps-md-5 d-flex flex-column justify-content-center mt-4 mt-md-0">
              <h5 className="fw-semibold mb-4" style={{ color: '#2c3e50', fontSize: '1.3rem' }}>
                Get in Touch
              </h5>
              <p style={{ fontSize: '1rem', color:'#21262b' }}>
                <FaEnvelope className="me-2 text-primary " style={{color:'#21262b'}}/> support@tenantlandlord.com
              </p>
              <p style={{ fontSize: '1rem' }}>
                <FaPhone className="me-2 text-primary" /> +91 123-456-7890
              </p>
              <p style={{ fontSize: '1rem' }}>
                <FaMapMarkerAlt className="me-2 text-primary" /> 123 Main Street, City, Country
              </p>
              <div
                className="mt-3 text-muted"
                style={{ fontSize: '1rem', lineHeight: '1.6' }}
              >
                We’d love to hear from you! Whether you're a landlord or a tenant, feel free to
                reach out with questions, feedback, or support needs.
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
