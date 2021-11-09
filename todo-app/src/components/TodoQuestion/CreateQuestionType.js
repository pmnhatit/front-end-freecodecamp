import React, {useState} from 'react';

const CreateQuestionType = function(props){
    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        if(e.target.id === 'question'){
            setInput(e.target.value);
        }
    }

    const handleSaveQuestion = (e) =>{
        e.preventDefault();
        props.handleAddItem(input, props.type);
        setInput('');
        props.closeQuestion();
    }
    
    const handleClose = (e) =>{
        e.preventDefault();
        props.closeQuestion();
    }

    return(<div>
        <input id='question' value={input} onChange={handleChange}/>
        <button onClick={handleSaveQuestion}>Save</button>
        <button onClick={handleClose}>Close</button>
    </div>);
}
export {CreateQuestionType};