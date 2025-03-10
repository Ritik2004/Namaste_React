import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem,setshowIndex}) => {
    // const[showItem,setshowItem] = useState(false);
    const handleClick = () => {
        setshowIndex()
    }
    return (
    <div>
        {/* {Header} */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
            <div onClick={handleClick} className="flex justify-between cursor-pointer">
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>🔰</span>
            </div>
            {showItem && <ItemList data={data.itemCards}/>}
        </div>
        
        {/* {Body} */}
    </div>
    )
}

export default RestaurantCategory;