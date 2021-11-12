import React, {useState} from 'react';
import {AddText} from '../TestText/AddText';
import {ItemImage} from './ItemImage';

const ListItemTodoImage = function({imageItems, addItem, deleteImageItem, answerImage, role}){

    return(<div style={{backgroundColor: 'blue', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Image</h1>
            {role==0 && <AddText addItem={addItem}/>}
        </div>
        <ul>
            {imageItems && imageItems.map((item)=> <ItemImage item={item} deleteItem={deleteImageItem} saveAnswer={answerImage} role={role}/>)}
        </ul>
    </div>);
}
export {ListItemTodoImage};