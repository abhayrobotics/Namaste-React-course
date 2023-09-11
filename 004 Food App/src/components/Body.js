import { useState } from "react";
import { Datalist } from "../utils/Datalist";
import ResCard from "./ResCard";

console.log(Datalist)
// let ListofRestuarant = Datalist

const Body = () => {
    let [ListofRestuarant,setListofRestuarant] = useState(Datalist)
    return (
        
        <div className="body">
            <button className="filter" onClick={()=>{
                //? filter logic
                console.log("button clikced")
                let filteredlist=  ListofRestuarant.filter((item)=>item.info.avgRating >4)
                console.log(filteredlist)

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