import React, {useState} from 'react';

const AddAnswerText = function(props){
    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        if(e.target.id==='answer'){
            setInput(e.target.value);
        }
    }

    const handleClick = (e) =>{
        e.preventDefault();
        props.handleSaveAnswer(props.index, input);
        setInput('');
        props.handleAnswer(e);
    }

    return(<>
        <input id='answer' value={input} onChange={handleChange} placeholder='Input your answer'></input>
        <button style={{marginBottom: '2px'}} onClick={handleClick}>Save</button>
    </>);
}
export {AddAnswerText};