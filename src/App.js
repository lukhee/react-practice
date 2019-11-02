import React, { Component } from 'react';
// import Person from './components/Person'
import UserOutput from './components/UserOutput'
import './App.css';

class App extends Component {
  state = {
    staff: [
      { name: "Balogun", position: "MD" },
      { name: "Willian", position: "Accounter" }
    ]
  }

  changeMDHandler = (name)=>{
    this.setState({
      staff: [
        { name: name, position: "MD" },
        { name: "Willian", position: "Accounter" }
      ]
    })
  }

  addInputValueHandller = (event) => {
    this.setState({
      staff: [
        { name: event.target.value, position: "MD" },
        { name: "Willian", position: "Accounter" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Micura Staff Record </h1>
        <UserOutput
          name={this.state.staff[0].name} 
          position={this.state.staff[0].position}
          click={this.addInputValueHandller} />
        <button onClick={this.changeMDHandler.bind(this, "Balogun Lukman")}>MD fullName</button>
        <UserOutput
          name={this.state.staff[1].name} 
          position={this.state.staff[1].position} 
          click={this.addInputValueHandller} />
        <button onClick={this.changeMDHandler.bind(this, "Funsho Willian")}>Accounter fullName</button>
      </div>
    );
  }
} 

export default App;
