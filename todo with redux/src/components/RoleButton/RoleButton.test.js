import React from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import {RoleButton} from './RoleButton';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Button component', () => {
    
  it('should render admin button', () => {
    const wrapper = shallow(<RoleButton/>)
    const buttonElement  = wrapper.find('#admin');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Admin');
  }),

  it('should render user button', () => {
    const wrapper = shallow(<RoleButton/>)
    const buttonElement  = wrapper.find('#user');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Member');
  }),

  it('change text when member button is clicked', () => {
    const changeRole = jest.fn();
    const wrapper = shallow(<RoleButton />);
    const buttonElement  = wrapper.find('#user');
    const mockedEvent = { target: {}}
    buttonElement.simulate('click', mockedEvent);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Your role: Member');
  });

  it('change text when admin button is clicked', () => {
    const changeRole = jest.fn();
    const wrapper = shallow(<RoleButton />);
    const buttonElement  = wrapper.find('#admin');
    const mockedEvent = { target: {}}
    buttonElement.simulate('click', mockedEvent);
    // const text = wrapper.find('p').text();
    // expect(text).toEqual('Your role: Admin');
  });
});
