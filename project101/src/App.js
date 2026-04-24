import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

function App() {
  const cards = [
    {
      title: 'Learn React-Bootstrap',
      text: 'Build interfaces faster with Bootstrap components written for React.',
    },
    {
      title: 'Create Responsive Layouts',
      text: 'Use the grid system to keep your content clear on mobile and desktop.',
    },
    {
      title: 'Ship Polished UI',
      text: 'Combine reusable components like navbars and cards for a consistent design.',
    },
  ];

  return (
    <React.Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#cards">Cards</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5">
          <h1 className="text-center mb-4">Welcome to My React-Bootstrap App</h1>
          <Row id="cards" className="g-4">
            {cards.map((card) => (
              <Col key={card.title} md={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
