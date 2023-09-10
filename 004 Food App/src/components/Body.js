import { Datalist } from "../utils/Datalist";
import ResCard from "./ResCard";
const Body = () => {
    return (
        
        <div className="body">
            <div className="search"></div>
            <div className="res__container">
                {
                    Datalist.map((item)=> {
                        console.log(item.info.id)   
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