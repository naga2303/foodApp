const ItemList =({items})=>{

    console.log(items)

    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.card?.info?.id}>
                        <span>{item.card?.info?.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList