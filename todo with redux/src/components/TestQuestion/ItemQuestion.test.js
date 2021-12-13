import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {ItemQuestion} from './ItemQuestion';
import {CreateQuestionType} from './CreateQuestionType';

configure({adapter: new Adapter()});

describe('<ItemQuestion />', () => {
    
    it('should render', () => {
        const item = {
            id: 1,
            content: 'test',
            answer: ''
        }
        const wrapper = shallow(<ItemQuestion item={item}/>);
        expect(wrapper.find('span').text()).toEqual('Question: test');
        expect(wrapper.find('#chooseType')).toHaveLength(1);
        wrapper.find('#text').simulate('click');
        expect(wrapper.find(CreateQuestionType)).toHaveLength(1);        
    });

});