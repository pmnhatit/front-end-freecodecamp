import React, {useState} from 'react';
import {AddQuestion} from './AddQuestion';
import {ItemQuestion} from './ItemQuestion';

const ListTodoQuestion = function(props){
    // const [questionItems, setQuestionItems] = useState([]);

    const handleAddQuestion = (text) =>{
        props.addItem(text, 'question');
    }

    return(<div style={{backgroundColor: 'yellow', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Question</h1>
            {props.role==0 && <AddQuestion addQuestion={handleAddQuestion}/>}
        </div>
        <ul>
            {props.questionItems.map((item, i) => <ItemQuestion index={i} item={item} addItem={props.addItem} role={props.role}/>)}
        </ul>
        
    </div>);
}
export {ListTodoQuestion};