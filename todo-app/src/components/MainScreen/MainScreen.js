import React, {useState} from "react";
import {ListText} from '../TodoText/ListText';
import {ListItemTodoImage} from '../TodoImage/ListItemTodoImage';
import {ListTodoQuestion} from '../TodoQuestion/ListTodoQuestion';

const MainScreen = function(){
    const [textItems, setTextItems] = useState([]);
    const [imageItems, setImageItems] = useState([]);
    const [questionItems, setQuestionItems] = useState([]);
    const [role, setRole] = useState(0);//0: admin, 1: user
    
    const handleAddItem = (text, type) =>{
        if(type==='text'){
            setTextItems([...textItems,{
                content: text,
                answer: ''
            }]);
        }else if(type==='image'){
            setImageItems([...imageItems,{
                content: text,
                answer: ''
            }])
        }else{
            setQuestionItems([...questionItems, {
                content: text,
                choice: ''
            }])
        }
    }

    const deleteItem = (index, type) =>{
        if(type==='text'){
            setTextItems([...textItems.slice(0,index), ...textItems.slice(index+1,textItems.length)]);
        }else if(type==='image'){
            setImageItems([...imageItems.slice(0,index),...imageItems.slice(index+1,imageItems.length)]);
        }else {
            setQuestionItems([...questionItems.slice(0,index), ...questionItems.slice(index+1, questionItems.length)]);
        }
        
    }

    const saveAnswer = (index, answer, type) =>{
        if(type==='text'){
            setTextItems([
                ...textItems.slice(0,index),
                {
                    ...textItems[index],
                    answer: answer
                },
                ...textItems.slice(index+1, textItems.length)
            ]);
        }else if(type==='image'){
            setImageItems([...imageItems.slice(0,index),
                {
                    ...imageItems[index],
                    answer: answer
                },
                ...imageItems.slice(index+1,imageItems.length)]);
        }else{
            setQuestionItems([...questionItems.slice(0,index),
            {
                ...questionItems[index],
                choice: answer
            },
            ...questionItems.slice(index+1, questionItems.length)]);
        }
        
    }

    const handleChangeRole = (e) =>{
        if(e.target.id==='admin'){
            setRole(0);
        }
        if(e.target.id==='user'){
            setRole(1);
        }
    }
    
    return(<div>
        <div style={{marginLeft: '5px'}}>
            {<p style={{fontWeight: 'bold'}}>Your role: {role==0?'Admin' : 'Member'}</p>}
            <button id='admin' onClick={handleChangeRole} style={{marginRight:'5px'}}>Admin</button>
            <button id='user' onClick={handleChangeRole}>User</button>
        </div>
        <ListText addItem={handleAddItem} deleteItem={deleteItem} saveAnswer={saveAnswer} textItems={textItems} role={role}/>
        <ListItemTodoImage addItem={handleAddItem} deleteItem={deleteItem} saveAnswer={saveAnswer} imageItems={imageItems} role={role}/>
        <ListTodoQuestion addItem={handleAddItem} deleteItem={deleteItem} saveAnswer={saveAnswer} questionItems={questionItems} role={role}/>
    </div>);
}
export {MainScreen};