import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
//function to uppercase
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
        setText(newText)
        props.showalert('Converted to Uppercase','success');
       
    }
    //function to Lowercase
    const handleLoClick=()=>{
       let newText=text.toLowerCase();
        setText(newText)
        props.showalert('Converted to Lowercase','success');
       
    }
    //to clear text
    const handleClearClick=()=>{
       let newText='';
        setText(newText)
        props.showalert('Text Clear','success');
       
    }
//to change event or to type in text area
    const handleOnChange=(event)=>{
    setText(event.target.value)
}
// For copying texts
const handleCopy=()=>{
  var text=document.getElementById("exampleFormControlTextarea1")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert('Text Copied','success');
}
//Remove extera spaces
const handleExteraSpace=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showalert('Extera Spaces removed','success');

}

  return (
//using props
<>
<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UperCase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2 my-2' onClick={ handleExteraSpace}>Remove Spaces</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1 >Text Summary</h1>
<p> <b> {text.split(" ").filter((element)=>{
return element.length!==0
}).length}</b> Words And <b>{text.length}</b> Characters</p>
<p>Time Taken to read <b>{0.008*text.split(" ").filter((element)=>{
return element.length!==0
}).length}</b></p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>


  )
}