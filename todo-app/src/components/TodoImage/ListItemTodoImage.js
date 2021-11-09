import React, {useState} from 'react';
import {AddText} from '../TodoText/AddText';
import {ItemImage} from './ItemImage';

const ListItemTodoImage = function(props){
    // const [imageItems, setImageItems] = useState([]);

    const addItem = (content) =>{
        props.addItem(content, 'image');
    }

    const deleteItem = (index) =>{
        props.deleteItem(index, 'image');
    }

    const saveAnswer = (index, answer) =>{
        props.saveAnswer(index, answer, 'image');
    }

    return(<div style={{backgroundColor: 'blue', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Image</h1>
            {props.role==0 && <AddText handleAddText={addItem}/>}
        </div>
        
        <ul>
            {props.imageItems.map((item, i)=> <ItemImage index={i} item={item} deleteItem={deleteItem} saveAnswer={saveAnswer} role={props.role}/>)}
        </ul>
    </div>);
}
export {ListItemTodoImage};