import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AppContext } from '../context/AppContext';
import PaymentTracker from '../components/PaymentTracker';

export default function LandlordDashboard() {
  const { issues } = useContext(AppContext);
  const [localIssues, setLocalIssues] = useState([]);

  useEffect(() => {
    setLocalIssues(issues);
  }, [issues]);

  const getVariant = (status) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'In Progress':
        return 'info';
      case 'Completed':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch('https://tenant-landlord-ca243-default-rtdb.firebaseio.com/issues.json');
      const data = await res.json();
      const firebaseKey = Object.keys(data).find(key => data[key].id === id);

      if (!firebaseKey) {
        console.error('Issue not found in Firebase');
        return;
      }

      await fetch(`https://tenant-landlord-ca243-default-rtdb.firebaseio.com/issues/${firebaseKey}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      const updated = localIssues.map(issue =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      );
      setLocalIssues(updated);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">Landlord Dashboard</h1>

      <div className="mb-4">
        <h3>All Maintenance Issues</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Urgency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {localIssues.map(issue => (
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.type}</td>
                <td>{issue.urgency}</td>
                <td>
                  <Form.Select
                    value={issue.status}
                    onChange={(e) => handleStatusChange(issue.id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </Form.Select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="mb-4">
        <h3>Issue Cards View</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {localIssues.map(issue => (
            <Col key={issue.id}>
              <Card style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <Card.Body>
                  <Card.Title>Issue: {issue.id}</Card.Title>
                  <Card.Text>
                    <strong>Type:</strong> {issue.type} <br />
                    <strong>Description:</strong> {issue.description}<br/>
                    <strong>Urgency:</strong> {issue.urgency} <br />
                    <strong>Status:</strong>{' '}
                    <Badge bg={getVariant(issue.status)}>{issue.status}</Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <PaymentTracker userRole="landlord" />
    </Container>
  );
}
