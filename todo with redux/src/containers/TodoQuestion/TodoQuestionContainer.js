import {connect} from 'react-redux';
import {ListTodoQuestion} from '../../components/TestQuestion/ListTodoQuestion';
import {addItem, deleteItem} from '../../actions/QuestionAction';
import {addTextItem} from '../../actions/TextAction';
import {addImageItem} from '../../actions/ImageAction';

const mapStateToProps = state =>{
    return {
        questionItems: state.todoQuestion,
        role: state.role
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        addItem: content => dispatch(addItem(content)),
        deleteImageItem: (id) => dispatch(deleteItem(id)),
        addTextItem: content => dispatch(addTextItem(content)),
        addImageItem: content => dispatch(addImageItem(content))
    }
}

export const TodoQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(ListTodoQuestion);