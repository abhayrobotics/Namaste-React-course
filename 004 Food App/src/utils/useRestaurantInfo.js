import { useEffect, useState } from "react";
import { Menu_URL } from "./constant";

const useRestaurantInfo= (resid)=>{

    const [resMenu,setResMenu]= useState(null);
    const [resFood,setFoodInfo] = useState(null)

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData= async ()=>{

        const response = await fetch(Menu_URL+resid)
        const json=  await response.json();

        const resData = json?.data?.cards[0]?.card?.card?.info

        const resFoodData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
        setResMenu(resData)
        setFoodInfo(resFoodData)
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
        
    }
  
    return [resMenu,resFood]
}

export default useRestaurantInfo;