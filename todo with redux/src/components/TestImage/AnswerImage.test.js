import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

import {AnswerImage} from './AnswerImage';
import {FileUpload} from '../UploadFile/FileUpload';

configure({adapter: new Adapter()});

describe('<AnswerImage />', () => {

    it('should render AnswerImage', () => {
        const item = {
            id: 1,
            content: 'test',
            answer: ''
        }
        const wrapper = shallow(<AnswerImage item={item}/>);
        expect(wrapper.find(FileUpload).exists()).toEqual(true);
    });

});