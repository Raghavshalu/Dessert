import react from 'react';
import { Link } from 'react-router-dom';
// import Form from './Form';
function Desserts(props){
    return(
        <div className="desserts" key={props.id}>
            <div className="yummy">
            <div className={props.number} key={props.id}>
            </div> 
            <Link to={`DessertDetails/${props.id}`}>
                <h3>{props.name}</h3>
                <p>{props.info}</p>
                </Link>
                <button onClick={()=>props.handleDel(props.id)}>Delete</button>
            </div>
        </div>
    )
}
export default Desserts;