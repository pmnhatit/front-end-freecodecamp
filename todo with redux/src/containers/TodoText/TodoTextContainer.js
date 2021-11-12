import {connect} from 'react-redux';
import {ListText} from '../../components/TestText/ListText';
import {addTextItem, deleteTextItem, addTextAnswer} from '../../actions/TextAction';

const mapStateToProps = state =>{
    return {
        textItems: state.todoText,
        role: state.role
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        addItem: content => dispatch(addTextItem(content)),
        deleteTextItem: (id) => dispatch(deleteTextItem(id)),
        answerTextItem: payload => dispatch(addTextAnswer(payload))
    }
}

export const TodoTextContainer = connect(mapStateToProps, mapDispatchToProps)(ListText);