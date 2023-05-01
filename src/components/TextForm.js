import React,{useState} from 'react'
import { ReactPropTypes } from 'react';


export default function TextForm(props) {

  document.title = "Home";

  const [text, setText] = useState("");
  const [word, setword] = useState(0);


    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!" , "success");
    }
    const handlelowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!" , "success");
    }
    const handleclearclick = ()=>{
      let newText = "";
      let word = 0;
      setText("");
      setword(word);
      props.showAlert("Cleared all the Text!" , "success");

   }
   const handlealternateclick = ()=>{
      let newText = text.split('').map((c,i) => 
      i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
      ).join('');
      setText(newText);
      props.showAlert("Converted to Alternatecase!" , "success");
   }
    const handleOnChange = (event)=>{
       setText(event.target.value);
       if(text.length === 0){
         setword(0);
       }else{
         setword(text.split(" ").length);
       }
    }
   

  return (
   <>
 <div className="container" style={{color: props.textcolor}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.colorpicker , color: props.textcolor}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary my-2" onClick={handleUpclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handlealternateclick}>AlTErNate Text</button>
 </div>
 <div className="container" style={{color:props.textcolor}}>
   <h2 className="my-3">Your Text Summary</h2>
   <p>{word} Words & {text.length} Character</p>
   <p>{0.008 * text.split(" ").length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter something in the given textbox above to preview it here."}</p>
 </div>
 </>
  )
}
