import Item from "./Item";

const ItemList = ({ dataToItemList }) => {
    let mapPrueba = dataToItemList.map((product) => (
        <Item key={product.id} dataToItem={product}></Item>
    ))
    return (
        mapPrueba
    )
}
export default ItemList;