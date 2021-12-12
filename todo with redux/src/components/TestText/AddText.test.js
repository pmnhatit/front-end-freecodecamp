import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AddText} from './AddText';

configure({adapter: new Adapter()});

describe('Add text', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddText/>);
    });

    it('should add text', () => {
        expect(wrapper.find('#addText')).toHaveLength(0);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('#addText')).toHaveLength(1);
    });

    
});