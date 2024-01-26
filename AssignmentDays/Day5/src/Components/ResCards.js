import { CDN_URL } from "../Utils/Constants";
const ResCards = (props) =>{
    const {resData} = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    
    return (
      <div className="res-card">
              <img  src = {CDN_URL +cloudinaryImageId}
             className="resLogo"></img>
       
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      </div>
    )
  }
export default ResCards;