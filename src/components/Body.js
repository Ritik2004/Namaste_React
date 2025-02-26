import RestroCard from "./RestroCard"
import {data} from '../utils/constants'
import { useState } from "react";

const Body = () => {
    const[restroList, SetRestroList] = useState(data);

    const filterRestaurant = () =>{
      const list = restroList.filter((restro)=>restro.info.rating.aggregate_rating>4);
      console.log("list",list)
      SetRestroList(list);
    }

    return (
        <div className='body'>
         <div className='search'>
          Search
         </div>
         <button onClick={()=>{filterRestaurant()}}>Top Rated Restaurant</button>
         <div className='res-container'>

            {/* <RestroCard resData={data[0]}/> */}
            {
                restroList.map((card)=>(
                    <RestroCard key={card.info.resId} resData ={card}/>
                ))
            }

         </div>
        </div>
    )
}

export default Body