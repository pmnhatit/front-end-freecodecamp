import React, {useState} from 'react';
import {AddAnswerText} from './AddAnswerText';

const ItemText = function(props){
    const [isAnswer, setIsAnswer] = useState(false);

    const handleDelete = (e) =>{
        e.preventDefault();
        props.deleteItem(props.index);
    }

    const handleAnswer = (e) =>{
        e.preventDefault();
        setIsAnswer(!isAnswer);
    }
    
    return(<div>
        <div>
        <li key={props.index}>{props.item.content} </li>
                {props.item.answer!=='' && 
                    <span>Your answer: {props.item.answer}</span>}
        </div>
        <div>
            {props.role==1 && <button onClick={handleAnswer}>Answer</button>}
            {props.role==0 && <button onClick={handleDelete}>Delete</button>}
        </div>
        {isAnswer && props.role==1 && <AddAnswerText index={props.index} handleSaveAnswer={props.handleSaveAnswer} handleAnswer={handleAnswer}/>}
    </div>
    );
}
export {ItemText};