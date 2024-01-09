import { useState } from "react";
import Model from "../model/Model.js";
import { szenvedoMondatok } from "../model/angol.js";
import Kerdes from "../view/Kerdes.js";
export default function Valaszto(){
    
    const [szam, setSzam] = useState(2);

    const MODEL = new Model(szenvedoMondatok);
    const CIM = MODEL.getCim();
    const KERDES_OBJ = MODEL.getObj(szam);
    const HOSSZ = MODEL.getHossz();
    
    function katt(){
        if (szam < HOSSZ) {
            setSzam((prevSzam) => prevSzam + 1); 
        } else{
            return;
        }
    }  
    return(
        <div className="App">
            <h3>{CIM}</h3>
            <p><Kerdes elem={KERDES_OBJ} /></p>
            <button onClick={katt}>Tovább</button>
        </div>
    )
}
