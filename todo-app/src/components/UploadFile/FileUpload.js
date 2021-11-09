import React, {Fragment, useState} from 'react';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: '200px' },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
    };

const FileUpload = function(props){
    const [file, setFile] = useState('');

    const handleChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'todo-app')
        const res = await fetch("https://api.cloudinary.com/v1_1/dtiq34whf/image/upload",
        {
            method: 'POST',
            body: data
        });
        const fileRes = await res.json();
        console.log(fileRes);
        console.log(fileRes.secure_url);
        props.saveAnswer(props.index, fileRes.secure_url);
        props.handleIsAnswer(e);
    }
    return(
        <Fragment>
            <form>
                <div >
                    <input type='file' id='customFile' onChange={handleChange} placeholder='Choose image to answer'></input>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </form>
            {file && (
                <div style={styles.preview}>
                    <img src={URL.createObjectURL(file)}
                        style={styles.image}
                        />
                </div>
            )}
        </Fragment>
    );
}
export {FileUpload};