import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {CreateQuestionType} from './CreateQuestionType';

configure({adapter: new Adapter()});

describe('<CreateQuestionType />', () => {
    
    it('should add text question', () => {
        const addTextItem = jest.fn();
        const addImageItem = jest.fn();
        const closeQuestion = jest.fn();
        const wrapper = shallow(<CreateQuestionType 
            type={'text'}
            addImageItem={addImageItem}
            addTextItem={addTextItem}
            closeQuestion={closeQuestion}
        />);
        wrapper.find('#question').simulate('change', {target: {value: 'my question'}})
        wrapper.find('button').first().simulate('click');
        expect(addTextItem).toBeCalled();        
    });

    it('should add image question', () => {
        const addTextItem = jest.fn();
        const addImageItem = jest.fn();
        const closeQuestion = jest.fn();
        const wrapper = shallow(<CreateQuestionType 
            type={'image'}
            addImageItem={addImageItem}
            addTextItem={addTextItem}
            closeQuestion={closeQuestion}
        />);
        wrapper.find('#question').simulate('change', {target: {value: 'my question'}});
        wrapper.find('button').first().simulate('click');
        expect(addImageItem).toBeCalled();        
    });

});