
import {Component} from 'react'
import './App.css';
import TransferPage from './subcomponents/main/Transfer'
import Overview from './subcomponents/main/Overview'

const initialState = {
  route : 'overview'
}

class App extends Component {
  constructor(){
    super()
    this.state = initialState
  }

  onRouteChange = (dest) => {
    this.setState({ 
      route: dest 
    })
  }

  render(){
    return (
      <div className="app">
        {
          this.state.route === 'overview'
          ? 
            <Overview
              onRouteChange = { this.onRouteChange }
            />
          :
            <TransferPage
              onRouteChange = { this.onRouteChange }
            />
        }
      </div>
    );
  }
}

export default App;
