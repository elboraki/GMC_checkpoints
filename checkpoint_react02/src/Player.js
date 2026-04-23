import Card from 'react-bootstrap/Card';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  const cardStyle = {
    width: '18rem',
    border: 'none',
    borderRadius: '20px',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
    color: '#f9fafb',
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.2)',
  };

  const imageStyle = {
    height: '280px',
    objectFit: 'cover',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.35rem 0.75rem',
    borderRadius: '999px',
    backgroundColor: '#f59e0b',
    color: '#111827',
    fontWeight: 700,
    marginBottom: '1rem',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body>
        <span style={badgeStyle}>#{jerseyNumber}</span>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 700 }}>{name}</Card.Title>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Free Agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 'N/A',
  imageUrl: 'https://via.placeholder.com/600x400?text=Player',
};

export default Player;
