import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState("Hello");

    const toUpper = () => {
        setText(text.toUpperCase());
    };

    const toLower = () => {
        setText(text.toLowerCase());
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
    };

    const toClear = () => {
        setText('');
    };

    const toCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>  
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2 className="my-3 text-4xl font-bold">{props.heading}</h2></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Enter Text Here" value={text} onChange={handleChange}/>
                </div>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toInvert}>Invert Case</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toSentence}>Sentence Case</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toClear}>Clear Text</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toCopy}>Copy Text</button>
            </div>
            <div className="container">
                <h1 className="my-3 text-4xl font-bold">Text Summary:</h1>
                <h3 className="my-2 text-2xl">Word Count : {text.split(" ").filter(word => word !== '' && word !== '.').length}</h3>
                <h3 className="my-2 text-2xl">Character Count: {text.length}</h3>
                <h3 className="my-2 text-2xl">Sentence Count: {text.split(".").filter(word => word.trim() !== '').length}</h3>
                <h3 className="my-2 text-2xl">Estimated Reading Time: { 0.005 * text.split(" ").filter(word => word !== '').length} Minutes</h3>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}