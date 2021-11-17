import react, { useState,useEffect } from 'react';
import Desserts from './Desserts';
import useFetch from '../Custom_hooks/useFetch';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
function Home(){
    // const [blog,changeBlog]=useState([{id:1,number:'one',name:"Mini Brownies",info:"73 Calories",Ingredients:"1 Making Brownies 2.Grease Brownie Pan 3.Melt Chocolate 4.Toast the Nuts 5.Beat Eggs 6.Mix Flour 7.Add Chocolate 8.Add Flour 9.Add Nuts 10.Bake the Brownies 11.Cool and Cut"},
    //     {id:2,number:"two",name:"Chocolate Cake","info":"73 Calories",Ingredients:"1.Prep 2.Mix Dry Ingredients 3.Make Batter 4.Bake"},
    //     {id:3,number:"three",name:"Macaroons","info":"73 Calories",Ingredients:"1.Almond flour,2.Powdered sugar,3.Castor sugar,4.Egg whites, aged,5.Cream of tartar,6.Gel food color,7.' Step Twelve: Devour!"},
    //     {id:4,number:"four",name:"Lemon Pie Shots","info":"73 Calories",Ingredients:"1.1/3 cup (65 grams) of granulated sugar,2.5 tablespoons (70 g) of butter, melted and slightly cooled,3.1 cup (240 ml) of fresh lemon juice from 5 to 6 lemons,4.2 14-ounce (396 g) cans of sweetened condensed milk,5.5 large egg yolks,6.1 cup (240 ml) of heavy whipping cream,7.1 tablespoon (8 g) of powdered sugar 8.1 teaspoon (4.9 ml) of vanilla extract"},
    //     {id:5,number:"five",name:"Coconut truffles","info":"73 Calories",Ingredients:"1.2 (16 ounce) boxes confectioners' sugar,2.1 (14 ounce) can sweetened condensed milk ,3.1 cup butter,4.2 ½ cups chopped walnuts,5.1 (14 ounce) package shredded coconut,6.1 (24 ounce) bag chocolate chips"},
    //     {id:6,number:"six",name:"Red Velvet Cupcakes","info":"73 Calories",Ingredients:"1.Cream Butter and Sugar,2.Eggs! 3.Cocoa Powder Time!,4. Stir Stir Stir, 5.Love That Color!, 6.Flour Time,7.Add Mix Add Mix Scrape,8.Fill, Smooth, Tap,9.Cool Remove Cool,10.Frosting Time!,11.Combine and Blend,12.Trim and Frost,13.Heart Shaped Cake Topper ,14.Cake Crumbs and Piping Bag"}])
    const {id}=useParams();
    const [name,setName]=useState("Red velvet");
    const {blog,changeBlog,error,setError}=useFetch('http://localhost:8000/Dessert');
    const handleDel=(id)=>{
      const reBlogged = blog.filter((b)=>b.id!==id);
      console.log(reBlogged);
      changeBlog(reBlogged);
    }
    useEffect(() => {
      return () => {
        console.log("delete")
      }
    },[blog])
    return(
        <div>
          <h1>Search For Tasty Desserts</h1>
          <div className="choose">
          <input type="text" placeholder="search your favourite Dessert" className="input" value={name} onChange={(e)=>{setName(e.currentTarget.value)}}></input><button className="search">Search</button></div>
       {error}
       {  blog===null?(<div>loading</div>): (blog.map((blog)=><Desserts id={blog.id} number={blog.number} name={blog.name} info={blog.info} Ingredients={blog.Ingredients} handleDel={handleDel}/>))}
       {/* {blog.map((blog)=><Desserts id={blog.id} number={blog.number} name={blog.name} info={blog.info}  handleDel={handleDel}/>)} */}
       <h1>For order click <Link to="/Form">here</Link></h1>
       </div>
    )
}
export default Home;