import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';

const firstName = '';

function App() {
  return (
    <main className="app-shell">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <Card className="product-card border-0 shadow-lg overflow-hidden">
              <div className="product-image-wrap">
                <Image />
                <span className="product-badge">New Arrival</span>
              </div>
              <Card.Body className="p-4 p-md-5">
                <div className="eyebrow">Sound, Styled</div>
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>

            <div className="welcome-block text-center mt-4">
              <p className="welcome-text">
                Hello, {firstName ? firstName : 'there!'}
              </p>
              {firstName && (
                <img
                  className="profile-image"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"
                  alt={firstName}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
