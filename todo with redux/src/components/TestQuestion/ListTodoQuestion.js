import React, {useState} from 'react';
import {AddQuestion} from './AddQuestion';
import {ItemQuestion} from './ItemQuestion';

const ListTodoQuestion = function({questionItems, addItem, addTextItem, addImageItem, role}){

    const handleAddQuestion = (text) =>{
        addItem(text);
    }

    return(<div style={{backgroundColor: 'yellow', marginBottom: '5px'}}>
        <div style={{marginLeft: '5px'}}>
            <h1>Todo Question</h1>
            {role==0 && <AddQuestion addQuestion={handleAddQuestion}/>}
        </div>
        <ul>
            {questionItems && questionItems.map((item) => <ItemQuestion item={item} addTextItem={addTextItem} addImageItem={addImageItem}/>)}
        </ul>
        
    </div>);
}
export {ListTodoQuestion};