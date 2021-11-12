import React, {useState} from 'react';
import {FileUpload} from '../UploadFile/FileUpload';

const AnswerImage = function({item, saveAnswer, handleIsAnswer}){
    return(<>
        <FileUpload id={item.id} saveAnswer={saveAnswer} handleIsAnswer={handleIsAnswer}/>
    </>);
}
export {AnswerImage};