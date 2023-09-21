import { useEffect, useState } from "react";
import { Datalist } from "../utils/Datalist";
import ResCard from "./ResCard";

console.log(Datalist)
// let ListofRestuarant = Datalist

const Body = () => {
    let [ListofRestuarant,setListofRestuarant] = useState(Datalist)
    
    console.log(" body console")
    // useeffect
    useEffect(()=>{
        console.log("use effecrt called");
        fetchData();

    },[])

    const fetchData = async ()=>{
        const json = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        console.log(json)
    }
    return (
        
        <div className="body">
            <div className="search">
                <input type="search" name="searchText" id="searchInput" />
                <button id="searching" onClick={(searchText)=>{


                }}>Start Search</button>
            </div>
            <button className="filter" onClick={()=>{
                //? filter logic
                // console.log("button clikced")
                let filteredlist=  ListofRestuarant.filter((item)=>item.info.avgRating >4)
                // console.log(filteredlist)

                setListofRestuarant(filteredlist)
            }}>
                Top Rated Restaurant
            </button>
            <div className="res__container">
                {
                    ListofRestuarant.map((item)=> {
                        // console.log(item.info.id)   
                        return(
                            <ResCard key= {item.info.id} resData = {item}/>
                        )
                    }
                    )
                }
           
            </div>
        </div>
    )
}

export default Body