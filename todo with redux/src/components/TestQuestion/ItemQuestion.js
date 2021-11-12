import React, {useState} from 'react';
import {CreateQuestionType} from './CreateQuestionType';

const ItemQuestion = function({item, addTextItem, addImageItem}){
    const [isQuestion, setIsQuestion] = useState(false);
    const [value, setValue] = useState('');

    const handleChoose = () =>{
        setIsQuestion(true);
    }

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    const closeQuestion = () =>{
        setIsQuestion(false);
    }

    // const handleAddItem = (text, type) =>{
    //     props.addItem(text, type);
    // }

    return(<div>
        <li>
            <span>Question: {item.content}</span>
            <div id="chooseType">
                <input type="radio" id="text" name={`todo_type_+${item.id}`} value="text" onClick={handleChoose} onChange={handleChange}/>
                <label for="text">Text</label><br></br>
                <input type="radio" id="image" name={`todo_type_+${item.id}`} value="image" onClick={handleChoose} onChange={handleChange}/>
                <label for="image">Image</label><br></br>
            </div>
            {isQuestion && <CreateQuestionType type={value} closeQuestion={closeQuestion} addTextItem={addTextItem} addImageItem={addImageItem}/>}
        </li>
        
    </div>);
}
export {ItemQuestion};