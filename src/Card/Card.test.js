import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockReservation;
  let mockAddReservation = jest.fn();

  beforeEach(() => {
    mockReservation = {
        id: 1,
        name: "Christie",
        date: "12/29",
        time: "7:00",
        number: 12
    }
    wrapper = shallow(<Card
      reservation={mockReservation}
      addReservation={mockAddReservation}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});
