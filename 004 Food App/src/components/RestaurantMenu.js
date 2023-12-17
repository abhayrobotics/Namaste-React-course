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
        <div className="flex justify-center my-2">
            <div className="flex self-center jutify-center w-7/12 ">

                <div className="items-center p-2" >


                    <h3 className="font-semibold text-2xl">{resMenu.name}</h3>

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
                                <div className="shadow-md my-3 bg-slate-100 px-2 rounded-lg">
                                    <div className="flex justify-between cursor-pointer">
                                        <div className="font-extrabold text-lg text-gray-800 ">{foodCategory.card.card.title} ({foodCategory.card.card.itemCards.length})</div>
                                        <div className="font-extrabold text-xl">^</div>

                                    </div>

                                    {/* showing each Food in that category*/}
                                    <ul className=" flex flex-col  justify-center  ">
                                        {foodCategory.card.card.itemCards.map((item) => {
                                            return (
                                                <div key={item?.card?.info?.id}>
                                                    <li className=" flex   justify-between   my-2 ">
                                                        <div className="text ">
                                                            <h4 className="text-md text-gray-800 font-bold">{item?.card?.info?.name}  </h4>
                                                            <h4>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                                            <p className="text-slate-500 text-sm">{item?.card?.info?.description}</p>

                                                        </div>
                                                        <div className="relative">

                                                        <img className="  w-32 rounded-md object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />
                                                        <span className="absolute  bottom-0 right-0 px-2 py-1 text-sm rounded text-green-500 bg-white  border-1 border-black shadow-lg cursor-pointer font-bold">Add+</span>
                                                        </div>
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