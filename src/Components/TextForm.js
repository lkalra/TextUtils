import React, {useState} from 'react'
//use state is hook

export default function TextForm(props) {
    const handleUpperClick = () => {
        //console.log("UpperCase got clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowerClick = () => {
        //console.log("UpperCase got clicked" + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase", "success")
    }

    const Cleartext = () => {
        //console.log("UpperCase got clicked" + text)
        let newtext = ('');
        setText(newtext)
        props.showAlert("Text Cleared", "success")
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
    }

    const removeExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnChange = (event) => {
        //console.log("onChange got clicked")
        setText(event.target.value) //setting value of text as the value which is getting input
    }

    //setting value of text as "enter text here(default)" and want to update it through setText
    const [text, setText] = useState('') //created by use state hook
    //to change the state of predefined text
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2> {props.heading} </h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpperClick}>Covert to UpperCase</button>
            <button  disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLowerClick}>Covert to LowerCase</button>
            <button  disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={Cleartext}>Clear Text</button>
            <button  disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button  disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your text summary</h1>
            {/* only split will give empty array and filter will if element length is zero will be in array else no */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{"You can read the text in "+0.008*text.split("").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter something in the TextBox to preview it here!"}</p>
        </div>
        </>
    )
}
