import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ListTodoQuestion} from './ListTodoQuestion';
import {ItemQuestion} from './ItemQuestion';
import {AddQuestion} from './AddQuestion';

const items = [
    {
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

describe('<ListTodoQuestion />', () => {
    
    it('should render for admin', () => {
        const wrapper = shallow(<ListTodoQuestion role={0}/>);
        expect(wrapper.find('h1').text()).toEqual('Todo Question');
        expect(wrapper.find(AddQuestion)).toHaveLength(1);
    });
    
    it('should have 2 image item', () => {
        const wrapper = shallow(<ListTodoQuestion questionItems={items}/>)
        expect(wrapper.find(ItemQuestion)).toHaveLength(2);
    });

});