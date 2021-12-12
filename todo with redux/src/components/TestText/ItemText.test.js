import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ItemText} from './ItemText';
import {AddAnswerText} from './AddAnswerText';

configure({adapter: new Adapter()});

const item = {
    id: 1,
    content: 'test',
    answer: 'answer'
}
const role = 0;
const mockProps = {
    item: item,
    deleteTextItem: jest.fn(),
    answerTextItem: jest.fn(),
    role: role
  };

describe('<ItemText />', () => {    

  it('should render item text', () => {
    const wrapper = shallow(<ItemText {...mockProps}/>);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('span').text()).toEqual('Your answer: answer');
    const button = wrapper.find('#delete');
    expect(button.text()).toEqual('Delete');
  });

  it('should delete', () => {
    const deleteTextItem = jest.fn();
    const answerTextItem = jest.fn();
    const wrapper = shallow(<ItemText 
      item={item}
      deleteTextItem={deleteTextItem}
      answerTextItem={answerTextItem}
      role={0}
      />,{
        preventDefault: () => {
        },
        target: [{}]
      });
    const button = wrapper.find('#delete').simulate('click');
    expect(deleteTextItem).toHaveBeenCalled();
  });

  it('should answer', () => {
    const deleteTextItem = jest.fn();
    const answerTextItem = jest.fn();
    const wrapper = shallow(<ItemText 
      item={item}
      deleteTextItem={deleteTextItem}
      answerTextItem={answerTextItem}
      role={1}
      />,{
        preventDefault: () => {
        },
        target: [{}]
      });
    const button = wrapper.find('#answer').simulate('click');
    expect(wrapper.find(AddAnswerText)).toHaveLength(1);
  });

});