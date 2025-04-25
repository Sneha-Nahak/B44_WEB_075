import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const categories = ['Plumbing', 'Electrical', 'General'];
const urgencies = ['Low', 'Medium', 'High'];

const MaintenanceForm = ({ currentUserId }) => {
  const { issues } = useContext(AppContext);
  const [formData, setFormData] = useState({
    category: '',
    urgency: '',
    description: '',
    files: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? [...files] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIssue = {
      id: issues.length + 1,
      type: formData.category,
      urgency: formData.urgency,
      status: "Pending",
      description: formData.description,
      userId: currentUserId
    };

    await fetch("https://tenant-landlord-ca243-default-rtdb.firebaseio.com/issues.json", {
      method: "POST",
      body: JSON.stringify(newIssue)
    });

    alert("Maintenance request submitted!");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <h3>Report an Issue</h3>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" onChange={handleChange}>
          <option>Select...</option>
          {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Urgency</Form.Label>
        <Form.Select name="urgency" onChange={handleChange}>
          <option>Select...</option>
          {urgencies.map((urg) => <option key={urg}>{urg}</option>)}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Upload Files</Form.Label>
        <Form.Control type="file" name="files" onChange={handleChange} multiple />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default MaintenanceForm;