import ItemListCount from "../itemCount/ItemCount"

const ItemListContainer = (props) => {
    return ( 
        <>
        <div className="saludoBienvenida">
        <h2>Hola! Bienvenido, {props.nombre}</h2>
        </div>
        <div>
            <ItemListCount stock={5} initial={1} onAdd={(cantidad)=>{console.log(cantidad)}}/>
            <ItemListCount stock={10} initial={3} onAdd={(cantidad)=>{console.log(cantidad)}}/>
        </div>
        </>
     );
}
 
export default ItemListContainer;