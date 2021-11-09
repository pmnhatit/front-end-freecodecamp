import React, {useState} from 'react';
import {AnswerImage} from './AnswerImage';

const styles = {
    image: { maxWidth: '200px', maxHeight: '200px' },
};

const ItemImage = function(props){
    const [isAnswer, setIsAnswer] = useState(false);

    const handleDelete = (e) =>{
        e.preventDefault();
        props.deleteItem(props.index);
    }

    const handleIsAnswer = (e) =>{
        e.preventDefault();
        setIsAnswer(!isAnswer);
    }

    return(<>
        <div>
        <li key={props.index}>{props.item.content} </li>
                {props.item.answer!=='' && 
                    <span>Your answer: <img style={styles.image} src={props.item.answer}/></span>}
        </div>
        <div>
            {props.role==1 && <button onClick={handleIsAnswer}>Answer</button>}
            {props.role==0 && <button onClick={handleDelete}>Delete</button>}
        </div>
        {isAnswer && props.role==1 && <AnswerImage index={props.index} saveAnswer={props.saveAnswer} handleIsAnswer={handleIsAnswer}/>}
    </>);
}
export {ItemImage};