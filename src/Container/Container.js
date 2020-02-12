import React, { Component } from 'react';
import './Container.css';
import Card from '../Card/Card.js'

class Container extends Component {
  constructor() {
    super();
    this.state= {sort: ''};
  }

  setSort = event => {
    this.setState({sort: event.target.value})
  }

  sortData = event => {
    event.preventDefault();
    this.props.sortReservations(this.state.sort);
    this.setState({ sort: ''});
  }

  render() {
    return (
      <section>
        <form className="sorter">
          <select name="order" onChange={this.setSort} >
            <option></option>
            <option value="earliest">Earliest to Latest</option>
            <option value="latest">Latest to Earliest</option>
          </select>
          <button className="sort-btn" onClick={this.sortData}>Sort Reservations</button>
        </form>
    {this.props.reservations.map(reservation => {
        return (
        <Card
          key={`${reservation.name}-${reservation.date}-`}
          reservation={reservation}
          removeReservation={this.props.removeReservation}
        />
        )
      })}
      </section>
    )
  }

}

export default Container;
