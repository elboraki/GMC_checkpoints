import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Ada Lovelace',
      bio: 'Ada Lovelace was a mathematician and writer who is often celebrated as one of the first computer programmers.',
      imgSrc:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
      profession: 'Mathematician and Computer Programming Pioneer',
    },
    shows: false,
    mountedTime: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <main className="App">
        <section className="profile-section">
          <p className="eyebrow">React State Checkpoint</p>
          <h1>Class-Based Profile</h1>

          <button className="toggle-button" onClick={this.toggleProfile}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          {shows && (
            <article className="profile-card">
              <img src={person.imgSrc} alt={person.fullName} />
              <div>
                <h2>{person.fullName}</h2>
                <p className="profession">{person.profession}</p>
                <p>{person.bio}</p>
              </div>
            </article>
          )}

          <p className="timer">
            Component mounted {mountedTime} second{mountedTime === 1 ? '' : 's'} ago.
          </p>
        </section>
      </main>
    );
  }
}

export default App;
