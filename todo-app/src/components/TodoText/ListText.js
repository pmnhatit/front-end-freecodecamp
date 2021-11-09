import React, {useState} from 'react';
import {ItemText} from './ItemText';
import {AddText} from './AddText';

const ListText = function(props){
    const [textItems, setTextItems] = useState([]);

    const handleAddText = (text) =>{
        props.addItem(text, 'text');
    }

    const deleteItem = (index) =>{
        props.deleteItem(index, 'text');
    }

    const handleSaveAnswer = (index, answer) =>{
        props.saveAnswer(index, answer, 'text');
    }

    return(<div style={{backgroundColor: 'red', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Text</h1>
            {props.role==0 && <AddText handleAddText={handleAddText}/>}
        </div>
        <ul>
            {props.textItems.map((item, i) => <ItemText index={i} item={item} deleteItem={deleteItem} handleSaveAnswer={handleSaveAnswer} role={props.role}/>)}
        </ul>
    </div>);
}
export {ListText};