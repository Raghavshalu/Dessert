import react from 'react';
import {useState,useEffect} from 'react'
const Form=()=>{
    const [dname,setDname]=useState(" ");
    const [picturelink,setPicturelink]=useState(" ");
    const [alldisplay,setAlldisplay]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault()
        const entry={dessertName:dname,DessertPictureLink:picturelink}
        setAlldisplay([entry]);
        console.log([...alldisplay,entry]);
    }
    return(
        <div className="Form">
            <h1 className="order">Submit your dessert!</h1>
            <form action=" " onSubmit={submitForm}>
                <div className="dessert_name" key="props.name">
                <label>Dessert Name</label><br/>
                <input type="text" placeholder="Chocolate chips cookies" className="input" value={dname} onChange={(e)=>{setDname(e.target.value)}}></input></div>
                <div name="dessert_picture">
                <label>Dessert picture link</label><br/>
                <input type="text" placeholder="https://ice-cream" className="input" value={picturelink} onChange={(e)=>setPicturelink(e.target.value)}></input>
                </div>
                <div className="button">
                <button className="submit">Submit</button>
                </div>
            </form>
            <div>
                {
                    alldisplay.map((curEle)=>{
                        return(
                            <div>
                                <p>{curEle.dname}</p>
                                <p>{curEle.picturelink}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Form;