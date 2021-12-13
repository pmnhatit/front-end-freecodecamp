import React, {useState} from 'react';

const AddAnswerText = function({item, answerTextItem, handleAnswer}){
    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        if(e.target.id==='answer'){
            setInput(e.target.value);
        }
    }

    const handleClick = (e) =>{
        // e.preventDefault();
        const payload = {
            id: item.id,
            answer: input
        }
        answerTextItem(payload);
        setInput('');
        handleAnswer(e);
    }

    return(<>
        <input id='answer' value={input} onChange={handleChange} placeholder='Input your answer'></input>
        <button style={{marginBottom: '2px'}} onClick={handleClick}>Save</button>
    </>);
}
export {AddAnswerText};