import {connect} from 'react-redux';
import {ListItemTodoImage} from '../../components/TestImage/ListItemTodoImage';
import {addImageItem, addImageAnswer, deleteImageItem} from '../../actions/ImageAction';

const mapStateToProps = state =>{
    return {
        imageItems: state.todoImage,
        role: state.role
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        addItem: content => dispatch(addImageItem(content)),
        deleteImageItem: (id) => dispatch(deleteImageItem(id)),
        answerImage: payload => dispatch(addImageAnswer(payload))
    }
}
export const TodoImageContainer = connect(mapStateToProps, mapDispatchToProps)(ListItemTodoImage);