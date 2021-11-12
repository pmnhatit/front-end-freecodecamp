import React, {useState} from 'react';

const CreateQuestionType = function({type, addTextItem, addImageItem, closeQuestion}){
    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        if(e.target.id === 'question'){
            setInput(e.target.value);
        }
    }

    const handleSaveQuestion = (e) =>{
        e.preventDefault();
        if(type==='text'){
            addTextItem(input);
        }else{
            addImageItem(input);
        }
        // props.handleAddItem(input, props.type);
        setInput('');
        closeQuestion();
    }
    
    const handleClose = (e) =>{
        e.preventDefault();
        closeQuestion();
    }

    return(<div>
        <input id='question' value={input} onChange={handleChange}/>
        <button onClick={handleSaveQuestion}>Save</button>
        <button onClick={handleClose}>Close</button>
    </div>);
}
export {CreateQuestionType};