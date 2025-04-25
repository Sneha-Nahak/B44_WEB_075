import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { FaHome, FaMoneyBillWave, FaTools, FaComments } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <div style={{ position: "relative" }}>
        <img
          src="/pexels-curtis-adams-1694007-6510950.jpg"
          alt=""
          style={{
            objectFit: "cover",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1", // Ensure content is on top
          }}
        />
        {/* Dark Overlay on Image */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)", // dark overlay
            zIndex: "-1",
          }}
        />
        {/* Hero Text and Call to Action */}
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            position: "relative",
            zIndex: "1",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div>
            <h1 className="display-4 fw-bold">
              Welcome to Our Tenant-Landlord Platform
            </h1>
            <p style={{ fontSize: "1.25rem" }}>
              Seamlessly manage properties, payments, and communication—all in
              one place.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#about"
              className="mt-4"
              style={{
                backgroundColor: "white",
                color: "#21262b",
                fontWeight: "500",
                border: "none",
              }}
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>

      {/* About Section */}
      <div
        id="about"
        style={{
          background: 'url("/pexels-artempodrez-7232913.jpg")',
          height: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          className="my-5 d-flex justify-content-center"
          style={{
            opacity: "1",
            paddingTop: "2rem",
            textAlign: "center",
            zIndex: "1",
          }}
        >
          <Card
            className="shadow-lg border-0 rounded-4"
            style={{
              maxWidth: "720px",
              background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
              padding: "2rem",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              borderRadius: "20px",
            }}
          >
            <Card.Body>
              <h3
                className="mb-4 text-center fw-semibold"
                style={{ color: "#2c3e50" }}
              >
                About Our Platform
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#4a4a4a",
                }}
              >
                Our Tenant-Landlord Platform streamlines property management by
                enhancing communication, maintenance tracking, and rent history
                access. Tenants and landlords can manage everything in one
                convenient space, reducing delays and confusion. Motivated by
                the need for transparency and ease, we aim to introduce features
                like digital lease signing and smart analytics. Our goal is to
                create a trusted, modern housing solution that simplifies and
                improves the rental experience for everyone.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </div>

      {/* Features Section */}
      <div style={{ background: "#f8f9fa", padding: "4rem 0" }}>
        <Container>
          <h2 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Key Features
          </h2>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body>
                  <FaHome size={40} color="#2c3e50" />
                  <h5 className="mt-3" style={{ color: "#2c3e50" }}>
                    Property Management
                  </h5>
                  <p style={{ color: "#4a4a4a" }}>
                    Effortlessly manage your properties, view details, and track
                    their status in one place.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body>
                  <FaMoneyBillWave size={40} color="#2c3e50" />
                  <h5 className="mt-3" style={{ color: "#2c3e50" }}>
                    Rent Payment Tracking
                  </h5>
                  <p style={{ color: "#4a4a4a" }}>
                    Track rent payments and history with ease for both tenants
                    and landlords.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body>
                  <FaTools size={40} color="#2c3e50" />
                  <h5 className="mt-3" style={{ color: "#2c3e50" }}>
                    Maintenance Requests
                  </h5>
                  <p style={{ color: "#4a4a4a" }}>
                    Tenants can submit maintenance requests, and landlords can
                    track and resolve them quickly.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="border-0 shadow-sm rounded-4">
                <Card.Body>
                  <FaComments size={40} color="#2c3e50" />
                  <h5 className="mt-3" style={{ color: "#2c3e50" }}>
                    Seamless Communication
                  </h5>
                  <p style={{ color: "#4a4a4a" }}>
                    Communicate effortlessly between tenants and landlords for
                    quick resolutions and discussions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Add more sections here (Pricing, Testimonials, etc.) */}
    </div>
  );
};

export default Home;
