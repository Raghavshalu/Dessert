import { useParams } from "react-router";
import useFetch from "../Custom_hooks/useFetch";
const DessertDetails=()=>{
    const {id}=useParams();
    const {blog,changeBlog,error,setError}=useFetch(`http://localhost:8000/Dessert/${id}`);
    return(
    <div className="dessertdetails">
        {error}
       {blog===null?(<div>loading</div>):
       <div className="ingredient">
        <h1>Ingredients:-{blog.name}</h1>
        <p>{blog.Ingredients}</p>
        </div>
     }
    </div>
    );
}
export default DessertDetails;