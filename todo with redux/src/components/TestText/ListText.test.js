import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ListText} from './ListText';
import {ItemText} from './ItemText';

configure({adapter: new Adapter()});

const items = [{
  "id": 1,
  "content": "delectus aut autem",
  "answer": ''
},
{
    "id": 2,
    "content": "quis ut nam facilis et officia qui",
    "answer": 'abc'
}
];

const role = 0;

const mockProps = {
  todoItems: items,
  addItem: jest.fn(),
  deleteTextItem: jest.fn(),
  answerTextItem: jest.fn(),
  role: role
};

describe('<TodoList />', () => {    
    
    it('should have 2 todo item', () => {
        // console.log(wrapper.debug());
        const wrapper = shallow(<ListText textItems={items}/>)
        expect(wrapper.find(ItemText)).toHaveLength(2);
    });

    it('should delete', () => {
      const wrapper = mount(<ListText {...mockProps}/>);
      wrapper.find(ItemText).at(0).find('#delete').simulate('click');
      expect(wrapper.find(ItemText)).toHaveLength(1);
    });

});
