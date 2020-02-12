import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  let mockAddReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form
      addReservation={mockAddReservation}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should set state when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'Eric'} };
    const expected = 'Eric';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should set reset state when addReservation is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockState = {name: 'Eric', date: '01/10', time: '10:00', number: 5};
    const expected = {name: '', date: '', time: '', number: ''};

    wrapper.instance().setState(mockState)
    wrapper.instance().addReservation(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call addReservation when the submit button is clicked', () => {
    wrapper.instance().addReservation = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().addReservation).toHaveBeenCalledWith(mockEvent);
  });



});
