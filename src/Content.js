import "./Content.css"
import React,{ useState } from "react";
function Content(){

    const [Red, setRed] = useState(0);
    const [Green, setGreen] = useState(0);
    
    const [Blue, setBlue] = useState(0);

    function Incraement(Number){
       
        return  Math.min(Number + 10,255)
    }
    function Decrement(Number){
        return Math.max(Number - 10,0)
    }

    function IncraementBlue(){
        setBlue((prvColor) => Incraement(prvColor));
    }
    function DecrementBlue(){
        setBlue((prvColor) => Decrement(prvColor));
    }
    function IncraementRed(){
        setRed((prvColor) => Incraement(prvColor));
    }
    function DecrementRed(){
        setRed((prvColor) => Decrement(prvColor));
    }
    
    function IncraementGreen(){
        setGreen((prvColor) =>Incraement(prvColor));
    }
    function DecrementGreen(){
        setGreen((prvColor) => Decrement(prvColor));
    }
    function setBaground(){
        document.body.style.backgroundColor = `rgb(${Red},${Green},${Blue})`;
    }

    return (
        <div className="content"  >
            <div className="parent">
                <div className="colorBox"  style={{ backgroundColor: Red===0 ?' rgb(0,0,0)':`rgb(${Red}, ${Green}, ${Blue})`  }}>

                </div>
                

            </div>
                <p>RGB({Red},{Green},{Blue})</p>
            <div className="Red">
                <button onClick={IncraementRed} className="Incraement">+</button>
                <p>Red</p>
                <button onClick={DecrementRed} className="Decrement">-</button>
            </div>


            <div className="Green">
                <button onClick={IncraementGreen} className="Incraement">+</button>
                <p>Green</p>

                <button onClick={DecrementGreen} className="Decrement">-</button>
            </div>
            <div className="Blue">
                <button onClick={IncraementBlue} className="Incraement">+</button>
                <p>Blue</p>

                <button onClick={DecrementBlue} className="Decrement">-</button>
            </div>


            <div className="setBaground">
                <button onClick={setBaground}>setBaground</button>
            </div>
        </div>
    )
}

export default Content;