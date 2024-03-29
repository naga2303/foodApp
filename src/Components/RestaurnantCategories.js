import ItemList from "./ItemList";
const RestaurnantCategories = ({data,showItems,setButtonClick})=>{
    

    const handleClick =() =>{
        setButtonClick();
       }
return (
    <div>
            
            <div className="bg-blue-100 shadow-lg p-4 w-6/12 mx-auto my-4 ">
                <div 
                className="flex justify-between cursor-pointer border-y-2 border-spacing-y-2" onClick={
                    handleClick
                }
                >
            <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            
             </div>
             
            { showItems && <ItemList items={data.itemCards} />}
            
             </div>
        </div>
)
}

/**
 * ShowItems - it is a state variable used for accordian expand and collapse. By default it false, on button click it changes to true.
 */

export default RestaurnantCategories;