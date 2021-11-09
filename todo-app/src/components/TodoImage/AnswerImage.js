import React, {useState} from 'react';
import {FileUpload} from '../UploadFile/FileUpload';

const AnswerImage = function(props){
    return(<>
        <FileUpload index={props.index} saveAnswer={props.saveAnswer} handleIsAnswer={props.handleIsAnswer}/>
    </>);
}
export {AnswerImage};