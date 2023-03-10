import React, { useState, useMemo, useRef, useEffect } from "react";

const Ticket = () => {
    const total = useRef(0)
    const [state1, setState1] = useState("")
    const [state, setState] = useState({
        Water: 0,
        Chilled: 0,
        Sewage: 0,
        Housing: 0,
        Electricity: 0,
    });

total.current = useMemo(() => { 
      return state.Water + state.Chilled + state.Electricity + state.Housing + state.Sewage;
    }, [state]);

   
const handleChange = (e) => {     
        setState({
            ...state,
            [e.target.name]: Number(e.target.value)
        })
    }

    const handleChang1 = (e) => {
        setState1(e.target.value)

  }
  useEffect(()=>{
    setState1(total.current)
  },[total.current])

  

  return (
        <>
            <input type={'number'} placeholder='Water' name="Water"  onChange={handleChange} />
            <br></br>
            <input type={'number'} placeholder='Chilled Water' name="Chilled"  onChange={handleChange} />
            <br></br>
            <input type={'number'} placeholder='Sewage' name="Sewage"  onChange={handleChange} />
            <br></br>
            <input type={'number'} placeholder='Housing' name="Housing"  onChange={handleChange} />
            <br></br>
            <input type={'number'} placeholder='Electricity' name="Electricity"  onChange={handleChange} />
            <br></br>
            <input type={'number'} placeholder='total'  name="total" onChange={handleChang1} value={state1}/> 
        </>

    )
}
export default Ticket
