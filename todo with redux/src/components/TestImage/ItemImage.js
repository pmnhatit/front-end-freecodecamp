import React, {useState} from 'react';
import {AnswerImage} from './AnswerImage';

const styles = {
    image: { maxWidth: '200px', maxHeight: '200px' },
};

const ItemImage = function({item, deleteItem, saveAnswer, role}){
    const [isAnswer, setIsAnswer] = useState(false);

    const handleDelete = (e) =>{
        e.preventDefault();
        deleteItem(item.id);
    }

    const handleIsAnswer = (e) =>{
        e.preventDefault();
        setIsAnswer(!isAnswer);
    }

    return(<>
        <div>
        <li key={item.id}>{item.content} </li>
                {item.answer!=='' && 
                    <span>Your answer: <img style={styles.image} src={item.answer}/></span>}
        </div>
        <div>
            {role==1 && <button onClick={handleIsAnswer}>Answer</button>}
            {role==0 && <button onClick={handleDelete}>Delete</button>}
        </div>
        {isAnswer && role==1 && <AnswerImage item={item} saveAnswer={saveAnswer} handleIsAnswer={handleIsAnswer}/>}
    </>);
}
export {ItemImage};