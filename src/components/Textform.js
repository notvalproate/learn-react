import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState("Hello");

    const toUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Changed all characters to Upper Case!", "success");
    };

    const toLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Changed all characters to Lower Case!", "success");
    };

    const toInvert = () => {
        let finalString = '';
        for(let i = 0; i < text.length; i++){
            if(text[i] === text[i].toLowerCase()){
                finalString += text[i].toUpperCase();
            }
            else{
                finalString += text[i].toLowerCase();
            }
        }
        setText(finalString);
        props.showAlert("Inverted All Casing!", "success");
    };

    const toSentence = () => {
        let changeCase = true;
        let finalString = '';
        for(let i = 0; i < text.length; i++){
            if(text[i] !== ' '){
                if(changeCase){
                    finalString += text[i].toUpperCase();
                    changeCase = false;
                }
                else{
                    finalString += text[i].toLowerCase();
                    changeCase = false;
                }
                if(text[i] === '.'){
                    changeCase = true;
                }
            }
            else{
                finalString += text[i];
            }
        }
        setText(finalString);
        props.showAlert("Converted to Sentence Case!", "success");
    };

    const toClear = () => {
        setText('');
        props.showAlert("Cleared!", "success");
    };

    const toCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const sendError = () => {
        props.showAlert("Enter A String First!", "danger");
    }

    return (
        <>  
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2 className="my-3 text-4xl font-bold">{props.heading}</h2></label>
                    <textarea className={`form-control bg-${props.mode.toLowerCase()}`} style={{caretColor: props.mode === "Dark" ? "white" : "black", color: props.mode === "Dark" ? "white" : "black"}} id="exampleFormControlTextarea1" rows="7" placeholder="Enter Text Here" value={text} onChange={handleChange}/>
                </div>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toInvert}>Invert Case</button>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toSentence}>Sentence Case</button>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toClear}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1 rounded-5" onClick={text.trim() === "" ? sendError : toCopy}>Copy Text</button>
            </div>  
            <div className="container">
                <h1 className="my-3 text-4xl font-bold">Text Summary:</h1>  
                <h3 className="my-2 text-2xl">Word Count : {text.split(/\s+/).filter(word => word !== '' && word !== '.').length}</h3>
                <h3 className="my-2 text-2xl">Character Count: {text.length}</h3>
                <h3 className="my-2 text-2xl">Sentence Count: {text.split(/[.\n]/).filter(word => word.trim() !== '').length}</h3>
                <h3 className="my-2 text-2xl">Estimated Reading Time: { 0.005 * text.split(" ").filter(word => word !== '').length} Minutes</h3>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}