import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestromenu from "../utils/useRestromenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestroMenu = () => {
    const[showIndex,setshowIndex] = useState(null);   
     const {resid} = useParams();
    const resInfo = useRestromenu(resid)

        if(resInfo === null){
           return  <Shimmer/>
        }
     
   const {name,cuisines,cloudinaryImageId,costForTwo} = resInfo?.cards[2]?.card?.card?.info; 
   const value = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((el)=>el.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       )
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            {/* {Categories accordian} */}
            {categories.map((category,index)=>(
                //This below is a controlled component.
            <RestaurantCategory 
            key={category.card.card.title}
            data={category?.card?.card} 
            showItem={index === showIndex ? true : false}
            setshowIndex={()=>setshowIndex((prevIndex)=>(prevIndex==index?null:index))}
            />
            ))}
        </div>
    )
}

export default RestroMenu