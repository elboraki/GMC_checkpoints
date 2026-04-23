import Player from './Player';
import players from './players';

function PlayersList() {
  return (
    <section className="players-section">
      <h1>FIFA Player Cards</h1>
      <p>Discover a few standout footballers from different leagues and nations.</p>
      <div className="players-grid">
        {players.map((player) => (
          <Player key={`${player.name}-${player.jerseyNumber}`} {...player} />
        ))}
      </div>
    </section>
  );
}

export default PlayersList;
