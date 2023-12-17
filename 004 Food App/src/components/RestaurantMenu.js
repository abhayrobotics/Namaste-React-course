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
        <div className="flex justify-center">
            <div className="flex self-center jutify-center w-6/12 border-2  border-black">

                <div className="items-center  text p-2" >


                    <h3 className="font-semibold text-xl">{resMenu.name}</h3>

                    <p>{resMenu.cuisines.join(", ")}</p>
                    <p>{resMenu.areaName + ", " + resMenu.city}</p>
                    <br />
                    <hr />
                    {/* {console.log(typeof resFood)} */}
                    {/* {console.log(resFood)} */}

                    {/* showing each category for indivisual restuarant */}

                    {resFood.map((foodCategory) => {
                            if (foodCategory.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                                console.log(foodCategory)
                                return (
                                    <div className="shadow-md my-3 ">
                                        <div className="flex justify-between">
                                        <div className="font-semibold ">{foodCategory.card.card.title} ({foodCategory.card.card.itemCards.length})</div>
                                        <div>^</div>

                                        </div>

                                    {/* showing each Food in that category*/}
                                        <ul className=" flex flex-col  justify-center items-center">
                                            {foodCategory.card.card.itemCards.map((item) => {
                                                return (
                                                    <div key={item?.card?.info?.id}>
                                                        <li className=" flex  place-content-between min-w-[650px]  my-2 ">
                                                            <div className="text ">
                                                                <h4>{item?.card?.info?.name}  </h4>
                                                                <h4>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                                                <p className="text-slate-500">{item?.card?.info?.description}</p>

                                                            </div>
                                                            <img className="  w-32 rounded-md object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />

                                                        </li>
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                            }
                                        </ul>
                                        <hr />
                                    </div>

                                )
                            }

                        })}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;