import RestroCard,{withPromotedLabel} from "./RestroCard"
import {data} from '../utils/constants'
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const[restroList, SetRestroList] = useState([]);
    const[searchtext,setSearchText] = useState('');
    const[filterrestrolist,setfilterrestrolist] = useState([]);
    const filterRestaurant = () =>{
      const list = restroList.filter((restro)=>restro.info.rating.aggregate_rating>4);
      
      SetRestroList(list);
    
    }
    useEffect(()=>{
          fetchData();
    },[])
    //Below we are passing RestroCard to a higherOrderfunction which return a card withenhance feature
    const RestroCardPromoted = withPromotedLabel(RestroCard)
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
         const json = await data.json();
         console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants) 
         SetRestroList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilterrestrolist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const searchRestro = () => {

     const filterrestro =  restroList.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
     setfilterrestrolist(filterrestro);
    }
    
    const onlinestatus = useOnlinestatus();
    if(onlinestatus === false){
        return (
            <div>
                <h1>Hi, It seems u are offline. Please check you connection.</h1>
            </div>
        )
    }

    const {setUserName,loggedInUser} = useContext(UserContext)

    return restroList.length === 0 ? <Shimmer/> : ( 

        <div className='body'>
        <div className="flex">
         <div className='m-4 p-4'>
          <input type="text" className="border border-solid border-black" 
          value={searchtext} 
          onChange={(e)=>setSearchText(e.target.value)}/>
          <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {searchRestro()}}>Search</button>
         </div>
         <div>
         <button className="px-2 py-1 bg-grey-100 m-2" onClick={()=>{filterRestaurant()}}>Top Rated Restaurant</button>
         <div>
            <label>UserName: </label>
            <input className="border blorder-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
         </div>
         
         </div>
         </div>
         <div className='res-container'>
            {
                filterrestrolist.map((card)=>(
                    <Link key={card.info.id} to={"/restaurants/" + card.info.id} >
                    {/* If restro is promoted add promoted label to it? */}
                    
                    {
                        card.info.avgRating>=4.5 ? (<RestroCardPromoted resData ={card}/>):(<RestroCard resData ={card}/>)
                    }
                    </Link>
                ))
            }

         </div>
        </div>
    )
}

export default Body