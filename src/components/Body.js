import RestroCard from "./RestroCard"
import {data} from '../utils/constants'
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const[restroList, SetRestroList] = useState([]);
    const[searchtext,setSearchText] = useState('');
    const[filterrestrolist,setfilterrestrolist] = useState([]);
    const filterRestaurant = () =>{
      const list = restroList.filter((restro)=>restro.info.rating.aggregate_rating>4);
      console.log("list",list)
      SetRestroList(list);
    
    }
    useEffect(()=>{
          fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
         const json = await data.json();
         console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants) 
         SetRestroList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilterrestrolist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const searchRestro = () => {

     const filterrestro =  restroList.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
        console.log(filterrestro)
     setfilterrestrolist(filterrestro);
    }
  
    return restroList.length === 0 ? <Shimmer/> : ( 

        <div className='body'>
        <div className="filter">
         <div className='search'>
          <input type="text" className="search-box" 
          value={searchtext} 
          onChange={(e)=>setSearchText(e.target.value)}/>
          <button onClick={() => {searchRestro()}}>Search</button>
         </div>
         
         <button onClick={()=>{filterRestaurant()}}>Top Rated Restaurant</button>
         </div>
         <div className='res-container'>
            {
                filterrestrolist.map((card)=>(
                    <RestroCard key={card.info.id} resData ={card}/>
                ))
            }

         </div>
        </div>
    )
}

export default Body