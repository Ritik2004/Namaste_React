import { useEffect, useState } from "react";
import { menu_url } from "../utils/constants";
const useRestromenu = (resId)=>{
    //fetchData
    const[resInfo,setresInfo] = useState(null);
    useEffect(()=>{
         fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(menu_url + resId);
        const json = await data.json();
        setresInfo(json.data)
    }
    
    
    return resInfo;
}


export default useRestromenu