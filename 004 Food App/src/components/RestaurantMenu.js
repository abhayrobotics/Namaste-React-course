import { useEffect, useState } from "react";
import ShimmerBody from "./ShimmerBody";
import { Menu_URL } from "../utils/constant";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null)
    const [resFood, setFoodInfo] = useState(null)

    const { resid } = useParams()
    console.log(resid)

    //? fetch restaurant menu after poage loads
    useEffect(() => {
        console.log("useEffect called")
        fetchMenu();
        //? after data fetch  destructuring


    }, [])
    console.log(useState())

    const fetchMenu = async () => {

        const response1 = await fetch(Menu_URL + resid)
        const json = await response1.json()
       


        const resData = json?.data?.cards[0]?.card?.card?.info

        // const resFoodData = json?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards
        const resFoodData = json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        setResMenu(resData)
        setFoodInfo(resFoodData)
        console.log(resMenu)

    }



    // const {} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // console.log(name,avgRating,areaName,city,cuisines)
    if (resMenu === null) {
        return <ShimmerBody />
    }
    return (
        <div className="menu__card">

            <div className="content-center">
                {/* {console.log(resFood)}
                {console.log(resMenu)} */}
            
                <h3>{resMenu.name}</h3>

                <p>{resMenu.cuisines.join(", ")}</p>
                <p>{resMenu.areaName + ", " + resMenu.city}</p>
                <br />
                <hr />
                <ul>
                    {resFood.map((item) => {
                        return (
                            <div key={item?.card?.info?.id}>
                            <li  className="menu__item">
                                <div className="text">
                                    <h4>{item?.card?.info?.name}  </h4>
                                    <h4>Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h4>
                                    <p>{item?.card?.info?.description}</p>
                                   
                                </div>
                                <img className="menu__image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId} alt="" />

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