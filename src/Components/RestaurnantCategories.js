import ItemList from "./ItemList";
const RestaurnantCategories = ({data,showItems,setButtonClick})=>{
    

    const handleClick =() =>{
        setButtonClick();
       }
return (
    <div>
            
            <div className="bg-blue-100 shadow-lg p-4 w-6/12 mx-auto my-4 ">
                <div 
                className="flex justify-between cursor-pointer" onClick={
                    handleClick
                }
                >
            <span>{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
             </div>
            { showItems && <ItemList items={data.itemCards} />}
             </div>
        </div>
)
}


export default RestaurnantCategories;