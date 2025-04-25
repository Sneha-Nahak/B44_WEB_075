import { useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Messaging = ({ currentUserId }) =>{
  const { users } = useContext(AppContext);
  const user = users.find(u => u.id === currentUserId);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Chat ({user?.role})</Card.Title>
        <div style={{ height: '100px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <div><strong>Tenant:</strong> Is the plumber coming today?</div>
          <div className="text-end"><strong>Landlord:</strong> Yes, at 2 PM</div>
        </div>
        <Form>
          <Form.Control type="text" placeholder="Type a message..." className="mb-2" />
          <Button variant="secondary" size="sm">Send</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Messaging;