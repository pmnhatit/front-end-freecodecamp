import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ItemImage} from './ItemImage'; 
import {AnswerImage} from './AnswerImage';

configure({adapter: new Adapter()});

describe('<ItemImage />', () => {
    
    it('should render ItemImage for admin', () => {
        const item = {
            id: 1,
            content: 'test',
            answer: ''
        }
        const wrapper = shallow(<ItemImage 
            item={item}
            role={0}
        />);
        expect(wrapper.find('button').text()).toEqual('Delete');
    });

    it('should render ItemImage for user', () => {
        const item = {
            id: 1,
            content: 'test',
            answer: ''
        }
        const deleteItem = jest.fn();
        const saveAnswer = jest.fn();
        const wrapper = shallow(<ItemImage
            item={item}
            deleteItem={deleteItem}
            saveAnswer={saveAnswer}
            role={1}
        />);
        expect(wrapper.find('li').text()).toEqual('test');
        expect(wrapper.find('button').text()).toEqual('Answer');
        expect(wrapper.find(AnswerImage).exists()).toEqual(false);
        wrapper.find('button').simulate('click');
        expect(wrapper.find(AnswerImage).exists()).toEqual(true);
    });

});