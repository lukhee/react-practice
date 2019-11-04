import React, { Component } from 'react';
// import Person from './components/Person'
import UserOutput from './components/UserOutput'
import './App.css';

class App extends Component {
  state = {
    staff: [
      {id: 1, name: "Balogun", position: "MD" },
      {id:2, name: "Willian", position: "Accounter" }
    ],
    showPerson: true
  }

  changeMDHandler = (name)=>{
    this.setState({
      staff: [
        {id: 1, name: name, position: "MD" },
        { id: 2, name: "Willian", position: "Accounter" }
      ]
    })
  }

  changePersonStateHandler = ()=>{
    const personState = this.state.showPerson
    this.setState({
      showPerson: !personState
    })
  }

  addInputValueHandller = (event, id) => {
    console.log(id)
    const staffIndex = this.state.staff.findIndex((s)=>{return s.id === id})
    const staffs = [...this.state.staff]
    let staffPosition = { ...staffs[staffIndex] }
    // console.log(staffIndex) 
    staffPosition.name = event.target.value
    staffs[staffIndex] = staffPosition
    this.setState({
      staff: staffs
    })
  }

  deletePersonHandler = (personIndex)=>{
    const staff = [...this.state.staff]
    staff.splice(personIndex, 1)
    this.setState({
      staff : staff
    })
  }

  render() {
    let persons = null
    if(this.state.showPerson){
      persons = (
        this.state.staff.map((ele, index) => {
          return (
            <UserOutput key = {index}
              name={ele.name} 
              position={ele.position} 
              click={(event)=>this.addInputValueHandller(event,ele.id)}
              deletePerson = {this.deletePersonHandler.bind(this,index)}/>
          )
        })
      )}

    return (
      <div className="App">
        <h1> Micura Staff Record </h1>
        <button onClick={this.changePersonStateHandler}>Show Person</button>
        {persons}
      </div>
    );
  }
} 

export default App;
