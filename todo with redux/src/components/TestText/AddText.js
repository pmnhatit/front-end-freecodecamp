import React, {useState} from 'react';

const AddText = function({addItem}){
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleClick = (e) =>{
        setIsOpen(!isOpen);
    }

    const handleChange = (e) =>{
        if(e.target.id==='addText'){
            setInput(e.target.value);
        }
    }

    const handleAddText = () =>{
        if(input!=''){
            addItem(input);
            setInput('');
        }
    }

    return(<>
        <button style={{marginBottom: '2px'}} onClick={handleClick}>Add</button>
        {isOpen && <div>
                <input id='addText' type='text' value={input} onChange={handleChange} placeholder='Input your question'></input>
                <button onClick={handleAddText}>Save</button>
            </div>}
    </>);
}
export {AddText};