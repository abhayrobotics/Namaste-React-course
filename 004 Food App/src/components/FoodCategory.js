import { useState } from "react";
import ItemList from "./ItemList";

const FoodCategory = ({ data }) => {
    const resFood = data;
    // const [showItems,setShowItems] = useState(false);

    handleClick = () => {
        console.log("clicked")
        // setShowItems(!showItems)

    }

    // filtering food categories from all data
    const FilteredCategory = resFood.filter((eachItem) => {
        return (eachItem.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    })
    console.log(FilteredCategory)

    return (
        <>

            {FilteredCategory.map((foodCategory,index) => {
                return (
                    // restaurant Name
                    <div className="shadow-lg my-4 bg-slate-100 p-2 rounded-lg " key={foodCategory.card.card.title} >
                        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                            <div className="font-extrabold text-lg text-gray-800 ">{foodCategory.card.card.title} ({foodCategory.card.card.itemCards.length})</div>
                            <div className="font-extrabold text-xl">^</div>

                        </div>

                        {/* showing each Food in that category*/}
                        <ul className=" flex flex-col  justify-center  ">
                            {(showitems=index ==1 ?true:false) && <ItemList data={foodCategory.card.card.itemCards}  />}

                        </ul>
                        <hr />
                    </div>

                )
            })

            }
        </>
    )
}

export default FoodCategory