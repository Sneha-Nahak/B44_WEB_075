import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';

export default function Signup() {
  const { setCurrentUser, users } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'tenant' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('https://tenant-landlord-ca243-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setCurrentUser(formData);
      navigate(formData.role === 'landlord' ? '/landlord' : '/tenant');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f4f6f8' }}>
      <Container style={{ maxWidth: '460px' }}>
        <Card className="shadow-lg border-0 rounded-4">
          <Card.Body className="p-4">
            <h2 className="mb-4 text-center fw-semibold" style={{ color: '#333' }}>Create Account</h2>
            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Name</Form.Label>
                <Form.Control 
                  name="name" 
                  onChange={handleChange} 
                  required 
                  className="rounded-3 shadow-sm" 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Email</Form.Label>
                <Form.Control 
                  name="email" 
                  type="email" 
                  onChange={handleChange} 
                  required 
                  className="rounded-3 shadow-sm" 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Password</Form.Label>
                <Form.Control 
                  name="password" 
                  type="password" 
                  onChange={handleChange} 
                  required 
                  className="rounded-3 shadow-sm" 
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-medium">Role</Form.Label>
                <Form.Select 
                  name="role" 
                  onChange={handleChange} 
                  className="rounded-3 shadow-sm"
                >
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord</option>
                </Form.Select>
              </Form.Group>
              <div className="d-grid">
                <Button 
                  type="submit" 
                  className="rounded-3 py-2 fw-semibold" 
                  style={{ backgroundColor: '#21262b', border: 'none' }}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
