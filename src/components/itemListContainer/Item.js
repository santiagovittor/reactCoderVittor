import ItemListCount from "../itemCount/ItemCount"

const Item = ({ dataToItem }) => {
    console.log(dataToItem)
    return (
        <>
            <div className="itemContainer">
                <h4>#{dataToItem.id}</h4>
                <img src={dataToItem.imagen} alt="Soccer Shirt"></img>
                <p>Producto: Camiseta {dataToItem.nombre}</p>
                <p>Temporada: {dataToItem.temporada}</p>
                <ItemListCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad) }}></ItemListCount>
            </div>

        </>
    );
}

export default Item;

