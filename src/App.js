import './App.css';
import React from 'react';
import Map from './Map.jsx'
import Profile from './Profile';
import Logout from './Logout';

const PAGES = {
  Map: Map ,
  Profile: Profile,
  Logout: Logout
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Map'
    }
  }

  changeState = (name) => {
    this.setState({ activeItem: name})
  }

  isActive = (value) => {
    return 'navigation-button ' + ((value === this.state.activeItem) ? 'active' : '')
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