import { useContext } from 'react';
import { Table, Badge, Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

export default function IssueDashboard({ currentUserId }) {
  const { issues, users } = useContext(AppContext);
  const currentUser = users.find(u => u.id === currentUserId);
  const isLandlord = currentUser?.role === 'landlord';

  const getVariant = (status) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'In Progress': return 'info';
      case 'Completed': return 'success';
      default: return 'secondary';
    }
  };

  const handleStatusChange = async (firebaseKey, newStatus) => {
    await fetch(`https://tenant-landlord-ca243-default-rtdb.firebaseio.com/issues/${firebaseKey}.json`, {
      method: "PATCH",
      body: JSON.stringify({ status: newStatus })
    });
    window.location.reload(); // quick refresh; ideally use context state update
  };

  return (
    <div className="mb-4">
      <h3>{isLandlord ? 'All Maintenance Issues' : 'Your Requests'}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Urgency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.type}</td>
              <td>{issue.urgency}</td>
              <td>
                {isLandlord ? (
                  <Form.Select
                    size="sm"
                    value={issue.status}
                    onChange={(e) => handleStatusChange(issue.firebaseKey, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                ) : (
                  <Badge bg={getVariant(issue.status)}>{issue.status}</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
