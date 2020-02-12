import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockReservation;
  let mockRemoveReservation = jest.fn();

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
      removeReservation={mockRemoveReservation}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call removeReservation when the delete button is clicked', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const expected = mockReservation.id;

    wrapper.find('button').simulate('click', mockEvent);
    expect(mockRemoveReservation).toHaveBeenCalledWith(expected);
  });


});
