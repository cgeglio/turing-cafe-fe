import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {
  let wrapper;
  let mockReservations;
  let mockRemoveReservation = jest.fn();

  beforeEach(() => {
    mockReservations = [{
        id: 1,
        name: "Christie",
        date: "12/29",
        time: "7:00",
        number: 12
    }]
    wrapper = shallow(<Container
      reservations={mockReservations}
      removeReservation={mockRemoveReservation}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});
