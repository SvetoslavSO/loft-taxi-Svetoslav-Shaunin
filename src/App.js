import './App.css';
import React from 'react';
import Map from './Map.jsx'
import Profile from './Profile';
import Logout from './Logout';
import Registration from './Registartion';

const PAGES = {
  Map: Map ,
  Profile: Profile,
  Logout: Logout,
  Registration: Registration
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Logout'
    }
  }

  changeState = (name) => {
    this.setState({ activeItem: name})
  }

  render () {
    const page = this.state.activeItem
    const CurrentPage = PAGES[page]
    return (
      <div className="App">
        <main className='content'>
          <CurrentPage changeState={this.changeState}/>
        </main>
      </div>
    );
  }
}
export default App;