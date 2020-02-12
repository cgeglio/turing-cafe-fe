import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {name: '', date: '', time: '', number: ''}
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addReservation = event => {
    event.preventDefault();
    this.props.addReservation({name: this.state.name, date: this.state.date, time: this.state.time, number: this.state.number})
    this.setState({name: '', date: '', time: '', number: ''});
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="01/01"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="12:00"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Number of people..."
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className="submit-btn" onClick={this.addReservation}>Submit</button>
      </form>
    )
  }
}

export default Form;
