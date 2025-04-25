import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AppNavbar = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top' style={{ width: "100%", padding: 0}}>
      <Container fluid style={{ padding: "1rem"}}>
        <Navbar.Brand as={Link} to="/" style={{ margin: 0, paddingLeft: "10px" }}>
          🏠 Tenant-Landlord Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {currentUser && currentUser.role === 'tenant' && (
              <>
                <Nav.Link as={Link} to="/tenant">Tenant Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}

            {currentUser && currentUser.role === 'landlord' && (
              <>
                <Nav.Link as={Link} to="/landlord">Landlord Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}

            {!currentUser && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;