import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const PaymentTracker = ({ currentUserId }) => {
  const { users } = useContext(AppContext);
  const user = users.find(u => u.id === currentUserId);
  const isTenant = user?.role === 'tenant';

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Rent Payment</Card.Title>
        {isTenant ? (
          <>
            <p>Next Payment: <strong>$1000</strong> due on <strong>1st May</strong></p>
            <Button variant="success">Mark as Paid</Button>
          </>
        ) : (
          <>
            <p><strong>Tenant A:</strong> Paid</p>
            <p><strong>Tenant B:</strong> Overdue</p>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default PaymentTracker;