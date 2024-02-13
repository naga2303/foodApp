import { CDN_URL } from "../Utils/Constants"

const ItemList =({items})=>{

    console.log(items)

    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.card?.info?.id}>
                        <div className="flex m-2 justify-between">
                        <span className="italic">{item.card?.info?.name}</span>
                        <div className="w-20">
                         <img src= {CDN_URL + item.card?.info?.imageId} className="w-20 "></img>
                         <button className="bg-black text-sm text-white rounded-md p-1">Add +</button>
                         </div>
                         </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;