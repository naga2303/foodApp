import { CDN_URL } from "../Utils/Constants";
const ResCards = (props) =>{
    const {resData} = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
              <img  src = {CDN_URL +cloudinaryImageId}
             className="resLogo "></img>
       
        <h3 className="font-bold italic">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    )
  }
export default ResCards;