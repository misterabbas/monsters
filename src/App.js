import React from 'react';
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // Class Methods
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  // Arrow Functions - They automatically bind the class methods to the
  // place from where it came to existence.
  // Example: we can bind handleChange to the App component using arrow
  // function without the need to bind it in the constructor.
  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox  
      placeholder='Search monsters'
      handleChange={this.handleChange} 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
  }
}

export default App;
