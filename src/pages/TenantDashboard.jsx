import Container from 'react-bootstrap/Container';
import MaintenanceForm from '../components/MaintenanceForm';
import IssueDashboard from '../components/IssueDashboard';
import Messaging from '../components/Messaging';
import PaymentTracker from '../components/PaymentTracker';

export default function TenantDashboard() {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Tenant Dashboard</h1>
      <MaintenanceForm />
      <IssueDashboard />
    
      <PaymentTracker userRole="tenant" />
    </Container>
  );
}
