import React, {useState} from 'react';
import {ItemText} from './ItemText';
import {AddText} from './AddText';

const ListText = function({textItems, addItem, deleteTextItem, answerTextItem, role}){

    return(<div style={{backgroundColor: 'red', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Text</h1>
            {role==0 && <AddText addItem={addItem}/>}
        </div>
        <ul>
            {textItems && textItems.map((item) => <ItemText item={item} deleteTextItem={deleteTextItem} answerTextItem={answerTextItem} role={role}/>)}
        </ul>
    </div>);
}
export {ListText};