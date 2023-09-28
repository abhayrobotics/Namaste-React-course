import { useEffect, useState } from "react";
import { Datalist } from "../utils/Datalist";
import ResCard from "./ResCard";

import ShimmerBody from "./ShimmerBody";

// console.log(Datalist)
// let ListofRestuarant = Datalist

const Body = () => {

    // ? list of Restuarants , vriable
    let [ListofRestuarant, setListofRestuarant] = useState([])
    const [filteredRestaurant, setFilterRestaurant] = useState([])

    // ? search text variable
    const [searchText, setSearchText] = useState("")

    console.log(" body console")

    //? use effect, use effect works after the body rendering is complete
    useEffect(() => {
        console.log("use effect called");
        fetchData();

    }, [])
    // ? async function -data fetching

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants );
        // ? optional chaining
        const filterApiData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log( filterApiData)

        setListofRestuarant(filterApiData)
        setFilterRestaurant(filterApiData)
    }
   
   

    //?  Time for loading , shimmer UI
    // ?conditional rendering
    if (ListofRestuarant.length === 0) {
        return (
            <ShimmerBody />
        )
    }
    return (

        <div className="body">
            <div className="search">
                
                <input type="text" value={searchText}
                    onChange={(e) => {
                        // ? updating the search text state variabel as it is binded with input tag
                        setSearchText(e.target.value)
                       

                    }}
                    id="searchInput" />

                <button  onClick={() => {

                    // ? search new restaurant based on search
                    
                    let filteredSearch = ListofRestuarant.filter((item)=>{
                        return item.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilterRestaurant(filteredSearch)
                    // console.log(filteredSearch)


                }}>Search</button>
            </div>
            <button className="filter" onClick={() => {
                //? filter logic
                // console.log("button clikced")
                let filteredlist = ListofRestuarant.filter((item) => item.info.avgRating > 4)
                // console.log(filteredlist)

                setFilterRestaurant(filteredlist)
            }}>
                Top Rated Restaurant
            </button>
            <div className="res__container">
                {
                    filteredRestaurant.map((item) => {
                        // console.log(item.info.id)   
                        return (
                            <ResCard key={item.info.id} resData={item} />
                        )
                    }
                    )
                }

            </div>

        </div>
    )
}

export default Body