import { useEffect } from 'react';
import {useState} from 'react';
const useFetch=(url)=>{
    const [blog,changeBlog] = useState(null);
    const[error,setError]=useState(null);
    useEffect(() => {
        setTimeout(()=>{
        fetch(url)
        .then(response => {
        if (!response.ok) {
        throw Error('Network response was not OK');
        }
        return response.json();
        })
        .then(Data => {console.log(Data)
            changeBlog(Data)
        })
        .catch(error => {
        changeBlog(null);
        setError(error.message);})
    },1000)
       },[url]) 
       return {blog,changeBlog,error,setError}
}
export default useFetch;