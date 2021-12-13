import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ListItemTodoImage} from './ListItemTodoImage';
import { ItemImage } from './ItemImage';
import {AddText} from '../TestText/AddText'

const items = [{
    "id": 1,
    "content": "delectus aut autem",
    "answer": ''
  },
  {
      "id": 2,
      "content": "quis ut nam facilis et officia qui",
      "answer": ''
  }
  ];

configure({adapter: new Adapter()});

describe('<ListItemTodoImage />', () => {
    
    it('should render for admin', () => {
        const wrapper = shallow(<ListItemTodoImage role={0}/>);
        expect(wrapper.find('h1').text()).toEqual('Todo Image');
        expect(wrapper.find(AddText)).toHaveLength(1);
    });
    
    it('should have 2 image item', () => {
        const wrapper = shallow(<ListItemTodoImage imageItems={items}/>)
        expect(wrapper.find(ItemImage)).toHaveLength(2);
    });

});