import { IMG_URL } from "../utils/constant";


const ResCard = (props) => {
    console.log(props);
    const {resData} =props;
    const {
        name,
        avgRating,
        cuisines,
        areaName,
        costForTwo,
        cloudinaryImageId} =resData?.info
        console.log(resData.info);
    // console.log(name);
    return (
        <div className="res__card">
            <div className="res__title">
                <h3>{name}</h3>
            </div>
            <div className="res__img">
                <img src={IMG_URL+cloudinaryImageId} alt="" />
            </div>
            <div className="res__desc">
                <h4>{cuisines.join(", ")} </h4>
                <h4>{avgRating} star</h4>
                <h4>{areaName}</h4>
                <h4>{costForTwo}</h4>

            </div>
        </div>
    )

}

export default ResCard;