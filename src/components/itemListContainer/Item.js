import ItemCount from "../itemCount/ItemCount"

const Item = ({ dataToItem }) => {
    console.log(dataToItem)
    return (
        <>
            <div className="itemContainer">
                <h4>#{dataToItem.id}</h4>
                <img src={dataToItem.imagen} alt="Soccer Shirt"></img>
                <ul>
                <h3>Camiseta {dataToItem.nombre} {dataToItem.kit}</h3>
                <li>Precio: ${dataToItem.precio}</li>
                </ul>
                <ItemCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad) }}></ItemCount>
            </div>

        </>
    );
}

export default Item;

