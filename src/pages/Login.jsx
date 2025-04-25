import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';

export default function Login() {
  const { users, setCurrentUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      navigate(user.role === 'landlord' ? '/landlord' : '/tenant');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f4f6f8' }}>
      <Container style={{ maxWidth: '420px' }}>
        <Card className="shadow-lg border-0 rounded-4">
          <Card.Body className="p-4">
            <h2 className="mb-4 text-center fw-semibold" style={{ color: '#333' }}>Welcome Back</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Email</Form.Label>
                <Form.Control 
                  type="email" 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  className="rounded-3 shadow-sm" 
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-medium">Password</Form.Label>
                <Form.Control 
                  type="password" 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                  className="rounded-3 shadow-sm" 
                />
              </Form.Group>
              <div className="d-grid">
                <Button 
                  type="submit" 
                  className="rounded-3 py-2 fw-semibold" 
                  style={{ backgroundColor: '#21262b', border: 'none' }}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
