import ShimmerBody from "./ShimmerBody";
import { useParams } from "react-router-dom";
// Custom hook
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {

    const { resid } = useParams()

    // ? Custom Hook 
    const [resMenu, resFood] = useRestaurantInfo(resid)

    if (resMenu === null) {
        return <ShimmerBody />
    }
    return (
        <div className="menu__card">

            <div className="items-center">
                {/* {console.log(resFood)}
                {console.log(resMenu)} */}
            
                <h3>{resMenu.name}</h3>

                <p>{resMenu.cuisines.join(", ")}</p>
                <p>{resMenu.areaName + ", " + resMenu.city}</p>
                <br />
                <hr />
                <ul className=" flex flex-col  justify-center items-center">
                    {resFood.map((item) => {
                        return (
                            <div key={item?.card?.info?.id}>
                            <li  className=" flex  place-content-between min-w-[700px] max-w-xl my-2 ">
                                <div className="text ">
                                    <h4>{item?.card?.info?.name}  </h4>
                                    <h4>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                    <p className="text-slate-500">{item?.card?.info?.description}</p>
                                   
                                </div>
                                <img className="menu__image  w-32 rounded-md object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />

                            </li>
                            <hr />
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;