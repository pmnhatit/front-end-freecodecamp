import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AddAnswerText} from './AddAnswerText';

configure({adapter: new Adapter()});

describe('Add answer text', () => {

    it('should render AddAnswerText', () => {
        const answerTextItem = jest.fn();
        const handleAnswer = jest.fn();
        const wrapper = shallow(<AddAnswerText />);
        expect(wrapper.find('#answer')).toHaveLength(1);
        expect(wrapper.find('button').text()).toEqual('Save');
    });

    it('should add text', () => {
        const item = {
            id: 1,
            content: 'test',
            answer: ''
        }
        const answerTextItem = jest.fn();
        const handleAnswer = jest.fn();
        const wrapper = shallow(<AddAnswerText 
            item={item}
            answerTextItem={answerTextItem}
            handleAnswer={handleAnswer}
        />);
        wrapper.find('input').simulate('change', { target: { value: 'my answer' } });
        wrapper.find('button').simulate('click');
        expect(answerTextItem).toHaveBeenCalled();
        expect(handleAnswer).toHaveBeenCalled();
        expect(wrapper.find('input').text).toHaveLength(0);
    });
});