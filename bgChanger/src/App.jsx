import React from "react";
import './index.css'
function App(){
  const handleColor=(color)=>{
    document.body.style.backgroundColor=color;
    console.log(document.body.style.backgroundColor);
    
  }
  return(
    <>
    <div id="div1">
      <div id="div1_1" 
>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Red",}}
        onClick={()=> handleColor("Red")}>Red</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Green"}}
        onClick={()=> handleColor("Green")}>Green</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Blue"}}
        onClick={()=> handleColor("Blue")}>Blue</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Olive"}}
        onClick={()=> handleColor("Olive")}>Olive</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Gray"}}
        onClick={()=> handleColor("Gray")}>Gray</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Yellow", color:"black"}}
        onClick={()=> handleColor("Yellow")}>Yellow</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Pink" ,color:"black"}}
        onClick={()=> handleColor("Pink")}>Pink</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Purple"}}
        onClick={()=> handleColor("Purple")}>Purple</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "lavender", color:"black"}}
        onClick={()=> handleColor("lavender")}>lavender</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "White", color:"black"}}
        onClick={()=> handleColor("White")}>White</button>
        <button type = "button" className="btn btn-primary " style={{backgroundColor: "Black"}}
        onClick={()=> handleColor("Black")}>Black</button>
      </div>
    </div>

    </>
  )
}
export default App;