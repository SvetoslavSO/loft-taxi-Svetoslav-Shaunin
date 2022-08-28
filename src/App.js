import './App.css';
import React from 'react';
import Map from './Map.jsx'
import Profile from './Profile';
import { LogoutWithAuth } from './Logout';
import { RegistrationWithAuth } from './Registration';
import { withAuth } from './AuthContext';

const PAGES = {
  Map: (props)=> <Map {...props} /> ,
  Profile: (props) => <Profile {...props} />,
  Logout: (props) => <LogoutWithAuth {...props}/>,
  Registration: (props) => <RegistrationWithAuth {...props}/>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Logout'
    }
  }

  changeState = (name) => {
    if (this.props.isLoggedIn) {
      this.setState({ activeItem: name})
    } else if (name === 'Registration') {
      this.setState({ activeItem: 'Registration'})
    } else {
      this.setState({ activeItem: 'Logout'})
    }
    
  }

  render () {
    const page = this.state.activeItem
    const CurrentPage = PAGES[page]
    return (
      <div className="App" id='app' data-testid="application">
        <main className='content'>
          <CurrentPage changeState={this.changeState}/>
        </main>
      </div>
    );
  }
}
export default withAuth(App);