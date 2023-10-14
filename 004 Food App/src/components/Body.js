import { useEffect, useState } from "react";
import { Datalist } from "../utils/Datalist";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import ShimmerBody from "./ShimmerBody";
import useOnlineStatus from "../utils/useOnlineStatus";

// console.log(Datalist)
// let ListofRestuarant = Datalist

const Body = () => {

    // ? list of Restuarants , variable
    // original copy- remains inatct
    let [ListofRestuarant, setListofRestuarant] = useState([])
    // filtered copy
    const [filteredRestaurant, setFilterRestaurant] = useState([])

    // ? search text variable
    const [searchText, setSearchText] = useState("")
    // console.log(" body console")
    const onlineStatus= useOnlineStatus()

    //? use effect, use effect works after the body rendering is complete
    useEffect(() => {
        // console.log("use effect called");
        fetchData();

    }, [])

    // ? async function -data fetching
    const fetchData = async () => {
        try{

            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            const json = await data.json();
            // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants );
            // ? optional chaining
            const filterApiData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log( filterApiData)
            
            setListofRestuarant(filterApiData)
            setFilterRestaurant(filterApiData)
        }
        catch(err){
            console.log(Err)
        }
    }

    //?  Time for loading , shimmer UI
    // ?conditional 
    if(onlineStatus===false){
        return <h1>Looks Like you're Offline. Check Your internet Connection !!</h1>
    }
    if (ListofRestuarant.length === 0) {
        return <ShimmerBody />
    }
    return (

        <div className="body">
            <div className="top-filter">
                <div className="search filter__method">

                    <input className="searchInput" type="text" value={searchText}
                        onChange={(e) => {
                            // ? updating the search text state variabel as it is binded with input tag
                            setSearchText(e.target.value)


                        }}
                        id="searchInput" />

                    <button onClick={() => {

                        // ? search new restaurant based on search

                        let filteredSearch = ListofRestuarant.filter((item) => {
                            return item.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilterRestaurant(filteredSearch)
                        // console.log(filteredSearch)


                    }}>Search</button>
                </div>
                <button className="filter filter__method" onClick={() => {
                    //? filter logic
                    // console.log("button clikced")
                    let filteredlist = ListofRestuarant.filter((item) => item.info.avgRating > 4)
                    // console.log(filteredlist)

                    setFilterRestaurant(filteredlist)
                }}>
                    Top Rated Restaurant
                </button>
                <button className="filter__method" onClick={()=>{
                    setFilterRestaurant(ListofRestuarant)
                }}>ALL</button>
            </div>
           <div className="heading">Top Restaurants in Town</div>
            <div className="res__container">
                {
                    filteredRestaurant.map((item) => {
                        // console.log(item.info.id)   
                        return (
                           <Link to={"restaurant/" + item.info.id}  key={item.info.id}> <ResCard resData={item} /></Link>
                        )
                    }
                    )
                }

            </div>

        </div>
    )
}

export default Body