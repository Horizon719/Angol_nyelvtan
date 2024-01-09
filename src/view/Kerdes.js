export default function Kerdes(props){
    let splitelve = props.elem.mondat.split('_');
    return(
        <div>
            <p>
                {splitelve[0]}
                <select id="valasz" name="valasz">
                    <option value="0">--Válassz!--</option>
                    {props.elem.kevertValasztas.map((element, index) =>{
                        return(
                            <option value={element} key={index}>{element}</option>
                        )
                    })}
                </select>
                {splitelve[1]}
                &nbsp;({props.elem.alap})
            </p>
        </div>
    )
}