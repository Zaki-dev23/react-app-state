import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    person: {
      fullName: 'Zakaria ait laasri',
      bio: "ZAkaria ait laasri (Juin 20, 2000) was an Morrocain,I'm web devloper and physicien student.A Web Developer with two years of experience, specializing in HTML5, JavaScript, ReactJs, MySQL, database design,UX & UI desgin,back-end and front-end development. Adept at collaborating with dynamic teams to build high quality websites and identify opportunities to enhance the user experience...",
      imgSrc: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      profession: "Software Developer"
    },
    show: false,
    timeSinceMount: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleToggle = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <h1>My Profile</h1>
        <button className="toggle-button" onClick={this.handleToggle}>
          {show ? 'Hide' : 'Show'} Profile
        </button>
        {show && (
          <div className="profile">
            <img className="profile-image" src={imgSrc} alt="image" />
            <div className="profile-info">
              <h2>{fullName}</h2>
              <p>{bio}</p>
              <p>{profession}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
