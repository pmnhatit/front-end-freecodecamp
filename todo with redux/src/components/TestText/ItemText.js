import React, {useState} from 'react';
import {AddAnswerText} from './AddAnswerText';

const ItemText = function({item, deleteTextItem, answerTextItem, role}){
    const [isAnswer, setIsAnswer] = useState(false);

    const handleDelete = (e) =>{
        e.preventDefault();
        deleteTextItem(item.id);
    }

    const handleAnswer = (e) =>{
        e.preventDefault();
        setIsAnswer(!isAnswer);
    }
    
    return(<div>
        <div>
        <li key={item.id}>{item.content} </li>
                {item.answer!=='' && 
                    <span>Your answer: {item.answer}</span>}
        </div>
        <div>
            {role==1 && <button onClick={handleAnswer}>Answer</button>}
            {role==0 && <button onClick={handleDelete}>Delete</button>}
        </div>
        {isAnswer && role==1 && <AddAnswerText item={item} answerTextItem={answerTextItem} handleAnswer={handleAnswer}/>}
    </div>
    );
}
export {ItemText};