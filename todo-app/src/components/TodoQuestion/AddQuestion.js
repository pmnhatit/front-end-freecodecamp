import React, {useState} from 'react';

const AddQuestion = function(props){
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) =>{
        if(e.target.id === 'question'){
            setInput(e.target.value);
        }
    }

    const handleClickSave = () =>{
        if(input!==''){
            props.addQuestion(input);
            setInput('');
        }
    }

    const handleClickOpen = (e) =>{
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return(<div>
        <button onClick={handleClickOpen} style={{marginBottom: '2px'}}>Add</button>
        {isOpen && <div style={{marginBottom: '2px'}}>
            <input id='question' value={input} onChange={handleChange} placeholder='Input your question'></input>
            <button onClick={handleClickSave}>Save</button>
        </div>}
    </div>);
}
export {AddQuestion};