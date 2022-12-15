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

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3 className="my-3">{props.heading}</h3></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Enter Text Here" value={text} onChange={handleChange}/>
                </div>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 rounded-5" onClick={toLower}>Convert to Lowercase</button>
            </div>
            <div className="container">
                <h1 className="my-3">Text Summary:</h1>
                <h3 className="my-2">Word Count : {text.split(" ").filter(word => word !== '').length}</h3>
                <h3 className="my-2">Character Count: {text.length}</h3>
                <h3 className="my-2">Estimated Reading Time: { 0.005 * text.split(" ").filter(word => word !== '').length} Minutes</h3>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string
}